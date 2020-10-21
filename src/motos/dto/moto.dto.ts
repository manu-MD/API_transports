import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Marques } from "src/shared/marques/marques.entity";
import { Types } from "src/shared/types/types.entity";
import { Motos } from "../motos.entity";

export default class MotosDto {

  @ApiProperty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  readonly marque: Marques;

  @ApiProperty()
  readonly type: Types;

  @ApiProperty()
  readonly date: Date;

  @ApiProperty()
  @IsString()
  readonly renseignement: string;

  @ApiProperty()
  @IsString()
  readonly email: string;

  constructor(moto: Motos) {
    this.id = moto.id;
    this.marque = moto.marque;
    this.type = moto.type; 
    this.date = moto.date;
    this.renseignement = moto.renseignement;
    this.email = moto.email;
  }
}