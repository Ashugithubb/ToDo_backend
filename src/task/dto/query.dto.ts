import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class GetTaskQueryDto {
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    limit?: number = 10;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    startTime: Date

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    endTime: Date
}