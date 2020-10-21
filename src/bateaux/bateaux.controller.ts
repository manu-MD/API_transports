import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import { Bateaux } from './bateaux.entity';
import { BateauxService } from './bateaux.service';
import BateauCreateDto from './dto/bateau-create.dto';
import BateauxDto from './dto/bateau.dto';

@ApiTags('bateaux')
@Controller('bateaux')
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
}
