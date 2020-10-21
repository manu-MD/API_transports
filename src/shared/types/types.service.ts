import { Injectable, Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Types } from './types.entity';

@Injectable()
export class TypesService {
    constructor(
        @InjectRepository(Types)
        private readonly typesRepository: Repository<Types>,
    ){}

    create(Types: Types): Promise<Types> {
        return this.typesRepository.save(Types);
    }

    findAll(): Promise<Types[]> {
        return this.typesRepository.find();
    }
}
