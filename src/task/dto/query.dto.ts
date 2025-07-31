// get-task-query.dto.ts
import { IsOptional, IsString, IsDate, IsNumber, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class GetTaskQueryDto {
  @IsOptional()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @Type(() => Date)
  startTime?: Date;

  @IsOptional()
  @Type(() => Date)
  endTime?: Date;

  @IsOptional()
  @Type(() => Number)
  creatorId?: number;

  @IsOptional()
  @IsArray()
  @Type(() => Number)
  assigneeIds?: number[];
}
