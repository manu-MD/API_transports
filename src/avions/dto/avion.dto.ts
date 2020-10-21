import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Marques } from "src/shared/marques/marques.entity";
import { Types } from "src/shared/types/types.entity";
import { Avions } from "../avions.entity";


export default class AvionssDto {
  
    @ApiProperty()
    @IsString()
    readonly id: string;
  
    @ApiProperty()
    readonly marque: Marques;
  
    @ApiProperty()
    readonly type: Types;

    @ApiProperty()
    @IsString()
    readonly email: string;

    constructor( avion: Avions){
        this.id = avion.id;
        this.marque = avion.marque;
        this.email = avion.email;
        this.type = avion.type;
    }
}
