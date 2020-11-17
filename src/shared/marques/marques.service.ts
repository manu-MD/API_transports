import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marques } from './marques.entity';

@Injectable()
export class MarquesService {
    constructor(
        @InjectRepository(Marques)
        private readonly marquesRepository: Repository<Marques>,
    ){}

    create(Marques: Marques): Promise<Marques> {
        return this.marquesRepository.save(Marques);
    }

    findAll(category?: string): Promise<Marques[]> {
        const params: any = {
            order: {name: 'ASC'}
        };
        if(category){
            params.where = {
                category: category
            }
        }        
        return this.marquesRepository.find(params);
    }
}
