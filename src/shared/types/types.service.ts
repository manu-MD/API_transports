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

    findAll(category?: string): Promise<Types[]> {
        const params: any = {
            order: {type: 'ASC'}
        };
        if(category){
            params.where = {
                category
            }
        }
        return this.typesRepository.find(params);
    }
}
