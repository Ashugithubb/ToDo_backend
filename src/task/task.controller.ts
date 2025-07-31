import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query, ParseIntPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth';
import { GetTaskQueryDto } from './dto/query.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto, @Req() req) {
    const userId = req.user.id
    return this.taskService.createTask(createTaskDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('createdTasks')
  findAll(@Req() req) {
    return this.taskService.findAll(req.user.id);
  }


  @Get('filter')
  getTasks(@Query() query: GetTaskQueryDto) {
    return this.taskService.getFilteredTasks(query);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findTaskAssigne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Req() req) {
    const userId = req.user.id
    return this.taskService.update(+id, updateTaskDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    const userId = req.user.id
    return this.taskService.remove(+id, userId);
  }
}
