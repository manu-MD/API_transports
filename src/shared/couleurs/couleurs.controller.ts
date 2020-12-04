import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Couleurs } from "./couleurs.entity";
import { CouleursService } from "./couleurs.service";
import { JwtAuthGuard } from '../../auth/jwt-auth.guards';
import CouleurUpdateDto from './dto/couleur-update-dto';

@ApiTags('couleurs')
@Controller('couleurs')
@UseGuards(JwtAuthGuard)
export class CouleurController {

    constructor(
        private cs: CouleursService,
        ) {
    }

    // Requête Get findAll
    @Get()
    findAll(): Promise<Couleurs[]> {
        return this.cs.findAll();
    }

    // Requête Get findById)
    @Get(':id')
    findById(@Param('id') id: string,): Promise<Couleurs> {
        return this.cs.findById(id);
    }

    // Requête Post
    @Post()
    create(@Body() couleur: Couleurs): Promise<Couleurs> {
        return this.cs.create(couleur);
    }

    // Requête Delete
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.cs.delete(id);
    }

    // Requête Update
    @Put(':id')
    update(@Param('id') id: string, @Body() couleurUpdateDto: CouleurUpdateDto
    ) {
        return this.cs.update(id, couleurUpdateDto);
    }
}
