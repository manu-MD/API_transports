import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class MarqueCreateDto {

    @ApiProperty()
    @IsString()
    readonly name: string;
    
    @ApiProperty()
    @IsString()
    readonly category: string;
}