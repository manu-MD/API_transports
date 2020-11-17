import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { Bateaux } from './bateaux.entity';
import { BateauxService } from './bateaux.service';
import BateauCreateDto from './dto/bateau-create.dto';
import BateauUpdateDto from './dto/bateau-update.dto';
import BateauxDto from './dto/bateau.dto';

@ApiTags('bateaux')
@Controller('bateaux')
export class BateauxController {

    constructor(
        private bs: BateauxService,
    ) {
    }

    @Get()
    findAll(): Promise<BateauxDto[]> {
        return this.bs.findAll();
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findById(
        @Param('id') id: string, 
    ): Promise<BateauxDto> {
        return this.bs.findById(id);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    create(
        @Body() bateauCreateDto: BateauCreateDto
    ): Promise<Bateaux> {
        return this.bs.create(bateauCreateDto);
    }

    @Put(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    update(
        @Param('id') id: string, 
        @Body() bateauUpdateDto: BateauUpdateDto
    ) {
        return this.bs.update(id, bateauUpdateDto);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    remove(
        @Param('id') id: string
    ) {
        return this.bs.remove(id);
    }
}
