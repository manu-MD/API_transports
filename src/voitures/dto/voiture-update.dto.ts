import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from 'class-validator';

export default class VoitureUpdateDto {

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
    readonly observation: string;

    @ApiProperty()
    @IsString()
    readonly email: string;

    @ApiProperty()
    @IsBoolean()
    readonly status: boolean;
}
