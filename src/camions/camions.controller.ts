import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import { Camions } from './camions.entity';
import { CamionsService } from './camions.service';
import CamionCreateDto from './dto/camion-create.dto';
import CamionUpdateDto from './dto/camion-update.dto';
import CamionsDto from './dto/camion.dto';

@ApiTags('camions')
@Controller('camions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CamionsController {

    constructor(
        private cs: CamionsService,
        private mc: MarquesCategoriesService
    ){}

    @Get()
    findAll(): Promise<CamionsDto[]> {
        return this.cs.findAll();
    }

    @Get(':id')
    findById(
        @Param('id') id: string, 
    ): Promise<CamionsDto> {
        return this.cs.findById(id);
    }

    @Get('categories')
    findByCategories(): Promise<MarquesCategories[]> {
        return this.mc.findAll();
    }
    @Post()
    create(
        @Body() camionCreateDto: CamionCreateDto
    ): Promise<Camions> {        
        return this.cs.create(camionCreateDto);
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() camionUpdateDto: CamionUpdateDto
    ) {
        return this.cs.update(id, camionUpdateDto);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return this.cs.remove(id);
    }
}
