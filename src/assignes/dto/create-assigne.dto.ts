import { Type } from "class-transformer";
import { IsDate, IsEnum, IsOptional } from "class-validator";
import { TaskStatus } from "../enum/task.enum";


export class CreateAssigneDto {
    @IsDate()
    @Type(() => Date)
    deadLine: Date

    @IsOptional()
    @IsEnum(TaskStatus, { message: 'Status must be pending, in_progress, or done' })
    status: TaskStatus;
}
