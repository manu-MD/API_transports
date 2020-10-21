import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MotoCreateDto from './dto/moto-create.dto';
import { Motos } from './motos.entity';

@Injectable()
export class MotosService {
    constructor(
        @InjectRepository(Motos)
        private readonly motosRepository: Repository<Motos>,
    ){
        
    }

    async create(motoCreateDto: MotoCreateDto): Promise<Motos> {
        return this.motosRepository.save(motoCreateDto);
    }

    async findAll(): Promise<Motos[]> {
        return this.motosRepository.find();
    }
}
