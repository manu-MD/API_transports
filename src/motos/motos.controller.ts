import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import MotoCreateDto from './dto/moto-create.dto';
import MotoUpdateDto from './dto/moto-update.dto';
import MotosDto from './dto/moto.dto';
import { Motos } from './motos.entity';
import { MotosService } from './motos.service';

@ApiTags('motos')
@Controller('motos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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

    @Get(':id')
    findById(
        @Param('id') id: string, 
    ): Promise<MotosDto> {
        return this.ms.findById(id);
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

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() motoUpdateDto: MotoUpdateDto
    ) {
        return this.ms.update(id, motoUpdateDto);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return this.ms.remove(id);
    }
}
