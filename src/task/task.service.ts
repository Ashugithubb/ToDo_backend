import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private readonly taskRepo:Repository<Task>,
               private readonly userService:UserService ){}

  async createTask(createTaskDto: CreateTaskDto,userId) {
    const user = await this.userService.findOne(userId);
    if(!user) throw new ForbiddenException("User Not Found");

    const newTask = await this.taskRepo.create({
      ...createTaskDto,
      user
    })
    return this.taskRepo.save(newTask) ;
  }


  async findAll(userId:number) {
    const task = await this.taskRepo.find({
      where:{user:{id:userId}},
      relations:['assigne']
    })
    return task;
  }

 async findOne(id: number) {
    return  await this.taskRepo.findOneBy({id});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
