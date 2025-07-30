import { PartialType } from '@nestjs/mapped-types';
import { CreateAssigneDto } from './create-assigne.dto';

export class UpdateAssigneDto extends PartialType(CreateAssigneDto) {}
