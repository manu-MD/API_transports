import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Users } from "../users.entity";

export default class UsersDto {

    @ApiProperty()
    @IsString()
    readonly id: string;

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
    readonly password: string;

    constructor(user: Users) {
      this.id = user.id;
      this.lastName = user.lastName;
      this.firstName = user.firstName; 
      this.email = user.email;
      this.password = user.password;
    }

}
