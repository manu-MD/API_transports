import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class BateauUpdateDto {

  @ApiProperty()
  @IsString()
  readonly marqueId: string;

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
  @IsString()
  readonly date: Date;
  
  @ApiProperty()
  @IsString()
  readonly renseignement: string;
  
  @ApiProperty()
  @IsString()
  readonly email: string;
}