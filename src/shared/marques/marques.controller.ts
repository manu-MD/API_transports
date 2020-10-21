import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import { Marques } from './marques.entity';
import { MarquesService } from './marques.service';

@ApiTags('marques')
@Controller('marques')
export class MarquesController {

    constructor(
        private ms: MarquesService
        // private bs: BateauxService,
        // private mc: MarquesCategoriesService
    ) {
    }

    @Get()
    findAll(): Promise<Marques[]> {
        return this.ms.findAll();
    }

    // @Get('categories')
    // findByCategories(): Promise<Marques[]> {
    //     return this.ms.findAll();
    // }

    // @Post()
    // create(
    //     @Body() bateauCreateDto: BateauCreateDto
    // ): Promise<Bateaux> {
    //     return this.bs.create(bateauCreateDto);
    // }

}
