import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAssigneDto } from './dto/create-assigne.dto';
import { UpdateAssigneDto } from './dto/update-assigne.dto';
import { UserService } from 'src/user/user.service';
import { TaskService } from 'src/task/task.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Assigne } from './entities/assigne.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssignesService {
  constructor(private readonly userService:UserService,
              private readonly taskService:TaskService,
              @InjectRepository(Assigne) private readonly assigneRepo:Repository<Assigne>
  ){}

 async create(createAssigneDto: CreateAssigneDto,taskId:number,userId:number) {

    const task = await this.taskService.findOne(taskId);
    if(!task) throw new BadRequestException("Task not found")
   
    const user = await this.userService.findOne(userId);
    if(!user) throw new ForbiddenException("User Not Found");

    const newTask =  this.assigneRepo.create({
      ...createAssigneDto,
      user,
      task
    })
    return await this.assigneRepo.save(newTask);
  }
  async remove(id: number) {
    return  await this.assigneRepo.delete(id);
  }

  async update(id: number, updateAssigneDto: UpdateAssigneDto) {
    return await this.assigneRepo.update(id,updateAssigneDto);
  }


  findAll() {
    return `This action returns all assignes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assigne`;
  }
  
}
