import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class MotoUpdateDto {

    @ApiProperty()
    @IsString()
    readonly marqueId: string;
    
    @ApiProperty()
    @IsString()
    readonly typeId: string;
    
    @ApiProperty()
    @IsString()
    readonly couleurId: string;

    @ApiProperty()
    readonly date: Date;
    
    @ApiProperty()
    @IsString()
    readonly cylindree: string;
    
    @ApiProperty()
    @IsString()
    readonly renseignement: string;
    
    @ApiProperty()
    @IsString()
    readonly email: string;    
}

