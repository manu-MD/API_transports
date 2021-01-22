import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put, Res,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import VoitureCreateDto from './dto/voiture-create.dto';
import VoitureUpdateDto from './dto/voiture-update.dto';
import VoituresDto from './dto/voiture.dto';
import { Voitures } from './voitures.entity';
import { VoituresService } from './voitures.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { createReadStream, ReadStream } from 'fs';

@ApiTags('voitures')
@Controller('voitures')
export class VoituresController {

    constructor(
        private vs: VoituresService,
    ) {

    }

    @Get()
    findAll(): Promise<VoituresDto[]> {
        return this.vs.findAll();
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findById(
        @Param('id') id: string,
    ): Promise<VoituresDto> {
        return this.vs.findById(id);
    }

    @Get('/photo/:id')
    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    async getPhoto(
      @Param('id') id: string,
      @Res() response,
    ): Promise<string> {
        const voiture = await this.vs.findById(id);
        if (voiture.photo) {
            console.log(`${process.cwd()}/uploads/${voiture.photo}`);
            response.setHeader('Content-Type', voiture.mimetype );
            console.log(fs.existsSync(`${process.cwd()}/uploads/${voiture.photo}`));
            const path = `${process.cwd()}/uploads/${voiture.photo}`;
            const stream = createReadStream(path);
            stream.pipe(response);
        }
        return null
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor("photo", { dest: "./uploads" }))
    create(
        @Body() voitureCreateDto: VoitureCreateDto,
        @UploadedFile() file,
    ): Promise<Voitures> {
        console.log(voitureCreateDto, file)
        return this.vs.create(voitureCreateDto, file);
    }

    @Put(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor("photo", { dest: "./uploads" }))
    update(
        @Param('id') id: string,
        @Body() voitureUpdateDto: VoitureUpdateDto,
        @UploadedFile() file,
    ) {
        return this.vs.update(id, voitureUpdateDto, file);
    }

    @Put(':id/dispo')
    updateDispo(
      @Param('id') id: boolean,
      // @Body() voitureUpdateDto: VoitureUpdateDto
    ) {
        return this.vs.updateDispo(id);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    remove(
        @Param('id') id: string
    ) {
        return this.vs.remove(id);
    }
}
