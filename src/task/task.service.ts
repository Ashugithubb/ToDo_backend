import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Between, FindOptionsWhere, Like, Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { GetTaskQueryDto } from './dto/query.dto';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private readonly taskRepo: Repository<Task>,
    private readonly userService: UserService) { }

  async createTask(createTaskDto: CreateTaskDto, userId) {
    if (createTaskDto.endTime < createTaskDto.startTime) {
      throw new BadRequestException('endTime must be after or equal to startTime');
    }

    const user = await this.userService.findOne(userId);
    if (!user) throw new ForbiddenException("User Not Found");

    const newTask = await this.taskRepo.create({
      ...createTaskDto,
      user
    })
    return this.taskRepo.save(newTask);
  }


  async findAll(userId: number) {
    const task = await this.taskRepo.find({
      where: { user: { id: userId } },

    })
    return task;
  }

  async findTaskAssigne(id: number) {
    return await this.taskRepo.find(
      {
        where: { id },
        relations: ['assigne']
      });
  }

  async findOne(id: number) {
    return await this.taskRepo.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, userId: number) {
    const creator = await this.taskRepo.findOneBy({ id });
    if (creator?.user.id !== userId) throw new ForbiddenException("you are not authorized");
    return await this.taskRepo.update(id, updateTaskDto);
  }

  async remove(id: number, userId: number) {
    const creator = await this.taskRepo.findOneBy({ id });
    if (creator?.user.id !== userId) throw new ForbiddenException("you are not authorized");
    return await this.taskRepo.delete(id);
  }


  async getFilteredTasks(query: GetTaskQueryDto) {
    const { page = 1, limit = 10, title, startTime, endTime } = query;

     const where: FindOptionsWhere<Task> = {};
    if (title) {
      where.title = Like(`%${title}%`);
    }

    if (startTime && endTime) {
      where.startTime = Between(startTime, endTime);
    } else if (startTime) {
      where.startTime = Between(startTime, new Date());
    } else if (endTime) {
      where.startTime = Between(new Date(0), endTime);
    }
    const [task, total] = await this.taskRepo.findAndCount({
      where,
      skip: (page - 1) * limit,
      take: limit,
      // order: { startTime: 'ASC' },
      order: { id: 'DESC' }
    });
    return {
      total,
      page,
      limit,
      task,
    };
  }

}
//order: { startTime: 'DESC', title: 'ASC' }



