import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import { Bateaux } from './bateaux.entity';
import { BateauxService } from './bateaux.service';
import BateauCreateDto from './dto/bateau-create.dto';
import BateauUpdateDto from './dto/bateau-update.dto';
import BateauxDto from './dto/bateau.dto';

@ApiTags('bateaux')
@Controller('bateaux')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class BateauxController {

    constructor(
        private bs: BateauxService,
        private mc: MarquesCategoriesService
    ) {
    }

    @Get()
    findAll(): Promise<BateauxDto[]> {
        return this.bs.findAll();
    }

    @Get(':id')
    findById(
        @Param('id') id: string, 
    ): Promise<BateauxDto> {
        return this.bs.findById(id);
    }

    @Get('categories')
    findByCategories(): Promise<MarquesCategories[]> {
        return this.mc.findAll();
    }

    @Post()
    create(
        @Body() bateauCreateDto: BateauCreateDto
    ): Promise<Bateaux> {
        return this.bs.create(bateauCreateDto);
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() bateauUpdateDto: BateauUpdateDto
    ) {
        return this.bs.update(id, bateauUpdateDto);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return this.bs.remove(id);
    }
}
