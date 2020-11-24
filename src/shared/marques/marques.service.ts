import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MarqueCreateDto from './dto/marque-create-dto';
import { Marques } from './marques.entity';

@Injectable()
export class MarquesService {
    constructor(
        @InjectRepository(Marques)
        private readonly marquesRepository: Repository<Marques>,
    ){}

    create(marqueCreateDto: MarqueCreateDto): Promise<Marques> {
        return this.marquesRepository.save(marqueCreateDto);
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
