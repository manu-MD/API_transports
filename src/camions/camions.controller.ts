import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { Camions } from './camions.entity';
import { CamionsService } from './camions.service';
import CamionCreateDto from './dto/camion-create.dto';
import CamionUpdateDto from './dto/camion-update.dto';
import CamionsDto from './dto/camion.dto';

@ApiTags('camions')
@Controller('camions')
export class CamionsController {

    constructor(
        private cs: CamionsService,
    ){}

    @Get()
    findAll(): Promise<CamionsDto[]> {
        return this.cs.findAll();
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findById(
        @Param('id') id: string, 
    ): Promise<CamionsDto> {
        return this.cs.findById(id);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    create(
        @Body() camionCreateDto: CamionCreateDto
    ): Promise<Camions> {        
        return this.cs.create(camionCreateDto);
    }

    @Put(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    update(
        @Param('id') id: string, 
        @Body() camionUpdateDto: CamionUpdateDto
    ) {
        return this.cs.update(id, camionUpdateDto);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    remove(
        @Param('id') id: string
    ) {
        return this.cs.remove(id);
    }
}
