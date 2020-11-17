import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import MotoCreateDto from './dto/moto-create.dto';
import MotoUpdateDto from './dto/moto-update.dto';
import MotosDto from './dto/moto.dto';
import { Motos } from './motos.entity';
import { MotosService } from './motos.service';

@ApiTags('motos')
@Controller('motos')
export class MotosController {

    constructor(
        private ms: MotosService,
    ) {
        
    }
    @Get()
    findAll(): Promise<MotosDto[]> {
        return this.ms.findAll();
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findById(
        @Param('id') id: string, 
    ): Promise<MotosDto> {
        return this.ms.findById(id);
    }

     @Post()
     @ApiBearerAuth()
     @UseGuards(JwtAuthGuard)
    create(
        @Body() motoCreateDto: MotoCreateDto
    ): Promise<Motos> {
        return this.ms.create(motoCreateDto);
    }

    @Put(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    update(
        @Param('id') id: string, 
        @Body() motoUpdateDto: MotoUpdateDto
    ) {
        return this.ms.update(id, motoUpdateDto);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    remove(
        @Param('id') id: string
    ) {
        return this.ms.remove(id);
    }
}
