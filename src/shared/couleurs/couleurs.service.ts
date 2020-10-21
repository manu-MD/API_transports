import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Couleurs } from './couleurs.entity';

@Injectable()
export class CouleursService {
    constructor(
        @InjectRepository(Couleurs)
        private readonly couleursRepository: Repository<Couleurs>,
    ){}

    create(Couleurs: Couleurs): Promise<Couleurs> {
        return this.couleursRepository.save(Couleurs);
    }

    findAll(): Promise<Couleurs[]> {
        return this.couleursRepository.find({
            order: {
                couleur: 'ASC'
            }
        });
    }

}
