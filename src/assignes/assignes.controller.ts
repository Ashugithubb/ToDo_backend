import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignesService } from './assignes.service';
import { CreateAssigneDto } from './dto/create-assigne.dto';
import { UpdateAssigneDto } from './dto/update-assigne.dto';

@Controller('assignes')
export class AssignesController {
  constructor(private readonly assignesService: AssignesService) {}

  @Post('task/:taskid/user/userId')
  create(@Param('taskid')taskid:string,
        @Param('userId')userId:string,
        @Body()createAsddignDto:CreateAssigneDto) {
    return this.assignesService.create(createAsddignDto,+taskid,+userId);
  }

  @Get()
  findAll() {
    return this.assignesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssigneDto: UpdateAssigneDto) {
    return this.assignesService.update(+id, updateAssigneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignesService.remove(+id);
  }
}
