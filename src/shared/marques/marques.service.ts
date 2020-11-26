import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import MarqueCreateDto from './dto/marque-create-dto';
import MarqueUpdateDto from './dto/marque-update-dto';
import { Marques } from './marques.entity';

@Injectable()
export class MarquesService {
    constructor(
        @InjectRepository(Marques)
        private readonly marquesRepository: Repository<Marques>,
        private connection: Connection

    ){}

    async create(marqueCreateDto: MarqueCreateDto): Promise<Marques> {
        return this.marquesRepository.save(marqueCreateDto);
    }

    async findAll(category?: string): Promise<Marques[]> {
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
    
    // recherche la marque par son id
    async findById(id): Promise<Marques> {
      try {
        // appel sur la librairie TypeOrm pour récupérer un élément par son id ou renvoyer une erreur si introuvable
        return await this.connection.getRepository(Marques).findOneOrFail(id);
      } catch(e) {
        console.log(e);
      }
    }
     
    async update(
        id,
        marqueUpdateDto: MarqueUpdateDto
    ) { 
        const { name, category } = marqueUpdateDto;   
        // Recherche l'objet marque correspondant à id posté
        const marque = await this.findById(id);
        console.log('1', marque);
        console.log(marqueUpdateDto);
        marque.name = name;
        marque.category = category;
        

        console.log('2', marque);        
    
        try {
          // Met à jour la marque en base de données
          await this.connection.getRepository(Marques).save(marque);
        } catch(e) {
          console.log(e);
        }
    }

    async remove(id): Promise<void> {
      try {
        const marque = await this.connection.getRepository(Marques).findOneOrFail(id);
        await this.connection.getRepository(Marques).remove(marque);
      } catch(e) {
        console.log(e);
      }
    }  
}
