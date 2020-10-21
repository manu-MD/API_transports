import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class AvionCreateDto {
    
    @ApiProperty()
    @IsString()
    readonly email: string;
}