import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Marques } from "src/shared/marques/marques.entity";
import { Types } from "src/shared/types/types.entity";
import { Voitures } from "../voitures.entity";

export default class VoituresDto {

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
  readonly observation: string;

  @ApiProperty()
  @IsString()
  readonly email: string;

  constructor(voiture: Voitures) {
    this.id = voiture.id;
    this.marque = voiture.marque;
    this.type = voiture.type; 
    this.date = voiture.date;
    this.observation = voiture.observation;
    this.email = voiture.email;
  }
}