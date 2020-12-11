import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import VoitureCreateDto from './dto/voiture-create.dto';
import VoitureUpdateDto from './dto/voiture-update.dto';
import VoituresDto from './dto/voiture.dto';
import { Voitures } from './voitures.entity';
import { VoituresService } from './voitures.service';

@ApiTags('voitures')
@Controller('voitures')
export class VoituresController {

    constructor(
        private vs: VoituresService,
    ) {

    }

    @Get()
    findAll(): Promise<VoituresDto[]> {
        return this.vs.findAll();
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findById(
        @Param('id') id: string,
    ): Promise<VoituresDto> {
        return this.vs.findById(id);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    create(
        @Body() voitureCreateDto: VoitureCreateDto
    ): Promise<Voitures> {
        return this.vs.create(voitureCreateDto);
    }

    @Put(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    update(
        @Param('id') id: string,
        @Body() voitureUpdateDto: VoitureUpdateDto
    ) {
        return this.vs.update(id, voitureUpdateDto);
    }

    @Put(':id/dispo')
    updateDispo(
      @Param('id') id: boolean,
      // @Body() voitureUpdateDto: VoitureUpdateDto
    ) {
        return this.vs.updateDispo(id);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    remove(
        @Param('id') id: string
    ) {
        return this.vs.remove(id);
    }
}
