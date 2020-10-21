import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bateaux } from './bateaux.entity';
import BateauCreateDto from './dto/bateau-create.dto';
import BateauxDto from './dto/bateau.dto';

@Injectable()
export class BateauxService {
    constructor(
        @InjectRepository(Bateaux)
        private readonly bateauxRepository: Repository<Bateaux>,
    ){}

    create(bateauCreateDto: BateauCreateDto): Promise<Bateaux> {
        const obj = this.bateauxRepository.create(bateauCreateDto); 
        return this.bateauxRepository.save(obj);
    }
    
    async findAll(): Promise<BateauxDto[]> {
        const bateaux: Bateaux[] = await this.bateauxRepository.find({
            relations: ['marque']
        });
        return bateaux.map(
            (bateau: Bateaux) => new BateauxDto(bateau)
        );
    }
    
    // getHello(): string {
    //     return ' Hello skipper!!';
    // }
}
