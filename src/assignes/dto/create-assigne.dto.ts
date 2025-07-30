import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class CreateAssigneDto {
    @IsDate()
    @Type(() => Date)
    deadLine: Date
}
