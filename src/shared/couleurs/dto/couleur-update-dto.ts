import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class CouleurUpdateDto {

    @ApiProperty()
    @IsString()
    readonly couleur: string;
}
