import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import VoitureCreateDto from './dto/voiture-create.dto';
import VoituresDto from './dto/voiture.dto';
import { Voitures } from './voitures.entity';
import { VoituresService } from './voitures.service';

@ApiTags('voitures')
@Controller('voitures')

export class VoituresController {

    constructor(
        private vs: VoituresService,
        private mc: MarquesCategoriesService
    ) {

    }

    @Get()
    findAll(): Promise<VoituresDto[]> {
        return this.vs.findAll();
    }

    @Get('categories')
    findByCategories(): Promise<MarquesCategories[]> {
        return this.mc.findAll();
    }

    @Post()
    create(
        @Body() voitureCreateDto: VoitureCreateDto
    ): Promise<Voitures> {
        return this.vs.create(voitureCreateDto);
    }
}
