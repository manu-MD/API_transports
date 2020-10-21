import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import MotoCreateDto from './dto/moto-create.dto';
import MotosDto from './dto/moto.dto';
import { Motos } from './motos.entity';
import { MotosService } from './motos.service';

@ApiTags('motos')
@Controller('motos')

export class MotosController {

    constructor(
        private ms: MotosService,
        private mc: MarquesCategoriesService
    ) {
        
    }
    @Get()
    findAll(): Promise<MotosDto[]> {
        return this.ms.findAll();
    }

    @Get('categories')
    findByCategories(): Promise<MarquesCategories[]> {
        return this.mc.findAll();
    }

     @Post()
    create(
        @Body() motoCreateDto: MotoCreateDto
    ): Promise<Motos> {
        return this.ms.create(motoCreateDto);
    }
}
