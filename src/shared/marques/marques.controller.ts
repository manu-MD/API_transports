import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { Marques } from './marques.entity';
import { MarquesService } from './marques.service';
import MarqueCreateDto from './dto/marque-create-dto';
import MotoUpdateDto from 'src/motos/dto/moto-update.dto';
import MarqueUpdateDto from './dto/marque-update-dto';


@ApiTags('marques')
@Controller('marques')
export class MarquesController {

    constructor(
        private ms: MarquesService
    ) {
    }

    @Get()    
    findAll(@Query('category') category): Promise<Marques[]> {        
        return this.ms.findAll(category);
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findById(
        @Param('id') id: string, 
    ): Promise<Marques> {
        return this.ms.findById(id);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    create(
        @Body() marqueCreateDto: MarqueCreateDto
    ): Promise<Marques> {        
        return this.ms.create(marqueCreateDto);
    }

    @Put(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    update(
        @Param('id') id: string, 
        @Body() marqueUpdateDto: MarqueUpdateDto
    ) {
        return this.ms.update(id, marqueUpdateDto);
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
