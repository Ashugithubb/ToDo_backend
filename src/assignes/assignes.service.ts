import { Injectable } from '@nestjs/common';
import { CreateAssigneDto } from './dto/create-assigne.dto';
import { UpdateAssigneDto } from './dto/update-assigne.dto';
import { UserService } from 'src/user/user.service';
import { TaskService } from 'src/task/task.service';

@Injectable()
export class AssignesService {
  constructor(private readonly userService:UserService,
              private readonly taskService:TaskService
  ){}
 async create(createAssigneDto: CreateAssigneDto,taskId:number,userId:number) {
    const task = await this.taskService.findOne(taskId);
   

    return 'This action adds a new assigne';
  }

  findAll() {
    return `This action returns all assignes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assigne`;
  }

  update(id: number, updateAssigneDto: UpdateAssigneDto) {
    return `This action updates a #${id} assigne`;
  }

  remove(id: number) {
    return `This action removes a #${id} assigne`;
  }
}
