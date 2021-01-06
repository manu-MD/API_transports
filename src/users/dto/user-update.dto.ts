import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class UserUpdateDto {

    @ApiProperty()
    @IsString()
    readonly lastName: string;

    @ApiProperty()
    @IsString()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    readonly email: string;

    @ApiProperty()
    @IsString()
    readonly role: string;
}
