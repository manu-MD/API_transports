import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avions } from './avions.entity';

@Injectable()
export class AvionsService {
    constructor(
        @InjectRepository(Avions)
        private readonly avionsRepository: Repository<Avions>,
    ){}

    async create(Avions: Avions): Promise<Avions> {
        return this.avionsRepository.save(Avions);
    }

    async findAll(): Promise<Avions[]> {
        return this.avionsRepository.find();
    }
}
