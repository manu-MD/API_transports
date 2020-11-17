import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Marques } from './marques.entity';
import { MarquesService } from './marques.service';

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
