import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { Marques } from './marques.entity';
import { MarquesService } from './marques.service';
import MarqueCreateDto from './dto/marque-create-dto';


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

    @Post()
    create(
        @Body() marqueCreateDto: MarqueCreateDto
    ): Promise<Marques> {        
        return this.ms.create(marqueCreateDto);
    }

}
