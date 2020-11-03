import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Marques } from "src/shared/marques/marques.entity";
import { Camions } from "../camions.entity";

export default class CamionsDto {
    @ApiProperty()
    @IsString()
    readonly id: string;
  
    @ApiProperty()
    @IsString()
    readonly marque: Marques;
  
    @ApiProperty()
    @IsString()
    readonly genre: string;
  
    @ApiProperty()
    @IsString()
    readonly poids: string;  
 
    @ApiProperty()
    readonly date: Date;
  
    @ApiProperty()
    @IsString()
    readonly renseignement: string;
  
    @ApiProperty()
    @IsString()
    readonly email: string;

    constructor(camion: Camions){
        this.id = camion.id;
        this.marque = camion.marque;
        this.genre = camion.genre;
        this.poids = camion.poids;
        this.date = camion.date;
        this.renseignement = camion.renseignement;
        this.email = camion.email;
    }
}
