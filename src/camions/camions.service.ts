import { Injectable } from '@nestjs/common';
import { Marques } from 'src/shared/marques/marques.entity';
import { Connection } from 'typeorm';
import { Camions } from './camions.entity';
import CamionCreateDto from './dto/camion-create.dto';
import CamionUpdateDto from './dto/camion-update.dto';
import CamionsDto from './dto/camion.dto';

@Injectable()
export class CamionsService {
    constructor(
        private connection: Connection
    ){}

    async create(bateauCreateDto: CamionCreateDto): Promise<Camions> {
        const { marqueId, genre, poids,  date, renseignement, email} = bateauCreateDto;
        try{
      // Recherche l'objet marque correspondant au marqueId posté
    
      const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
      // Créer l'objet à insérer en bdd
      const camionObj = this.connection.getRepository(Camions).create({
        marque,
        genre,
        poids,
        date: new Date(date),
        renseignement,
        email,        
      }); 
        // sauvegarde l'objet en bdd   
        return await this.connection.getRepository(Camions).save(camionObj);
        } catch(e){
            console.log(e);
        }
    }
     
    async update(
        id,
        camionUpdate: CamionUpdateDto
        ) {
        const { marqueId, genre, poids, date, renseignement, email } = camionUpdate;
    
        // Recherche du camion à modifier
        const exists = await this.connection.getRepository(Camions).findOneOrFail(id);
        // Recherche l'objet marque correspondant au marqueId posté
        const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
    
        try {
          // Met à jour le camion en base
          await this.connection.getRepository(Camions).update(id, {            
            genre,
            poids,            
            date: new Date(date),
            renseignement,
            email
          });
        } catch(e) {
          console.log(e);
        }
      }
    
    async findAll(): Promise<CamionsDto[]> {
        try {
            return await this.connection.getRepository(Camions).find({
                relations: ['marque']
            });
        } catch(e) {
            console.log(e);
        }
    }

    async findById(id): Promise<CamionsDto> {
        try {
          return await this.connection.getRepository(Camions).findOneOrFail(id, {
            relations: ['marque']
          });
        } catch(e) {
          console.log(e);
        }
    }

    async remove(id): Promise<void> {
        try {
          const camion = await this.connection.getRepository(Camions).findOneOrFail(id);
          await this.connection.getRepository(Camions).remove(camion);
        } catch(e) {
          console.log(e);
        }
    }
}
