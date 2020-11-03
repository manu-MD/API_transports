import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Bateaux } from '../bateaux.entity';
import { Marques } from 'src/shared/marques/marques.entity';

export default class BateauxDto {

  @ApiProperty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  @IsString()
  readonly energie: string;

  @ApiProperty()
  @IsString()
  readonly longueur: string;

  @ApiProperty()
  @IsString()
  readonly place: string;

  @ApiProperty()
  @IsString()
  readonly puissance: string;

  @ApiProperty()
  readonly marque: Marques;

  @ApiProperty()
  readonly date: Date;

  @ApiProperty()
  @IsString()
  readonly renseignement: string;

  @ApiProperty()
  @IsString()
  readonly email: string;  

  constructor(bateau: Bateaux) {
    this.id = bateau.id;
    this.energie = bateau.energie;
    this.longueur = bateau.longueur;
    this.place = bateau.place;
    this.puissance = bateau.puissance;
    this.marque = bateau.marque;
    this.date = bateau.date;
    this.renseignement = bateau.renseignement;
    this.email = bateau.email;



  }
}