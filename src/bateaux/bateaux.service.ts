import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marques } from 'src/shared/marques/marques.entity';
import { Connection, Repository } from 'typeorm';
import { Bateaux } from './bateaux.entity';
import BateauCreateDto from './dto/bateau-create.dto';
import BateauUpdateDto from './dto/bateau-update.dto';
import BateauxDto from './dto/bateau.dto';

@Injectable()
export class BateauxService {
    constructor(
        private connection: Connection
    ){}

    async create(bateauCreateDto: BateauCreateDto): Promise<Bateaux> {
        const { marqueId, energie, longueur, place, puissance, date, renseignement, email} = bateauCreateDto;
        try{
      // Recherche l'objet marque correspondant au marqueId posté
    
      const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
      // Créer l'objet à insérer en bdd
      const bateauObj = this.connection.getRepository(Bateaux).create({
        energie,
        longueur,
        place,
        puissance,
        date: new Date(date),
        renseignement,
        email,
        marque
      }); 
        // sauvegarde l'objet en bdd   
        return await this.connection.getRepository(Bateaux).save(bateauObj);
        } catch(e){
            console.log(e);
        }
    }
     
    async update(
        id,
        bateauUpdate: BateauUpdateDto
        ) {
        const { marqueId, energie, longueur, place, puissance, date, renseignement, email } = bateauUpdate;
    
        // Recherche du bateau à modifier
        const exists = await this.connection.getRepository(Bateaux).findOneOrFail(id);
        // Recherche l'objet marque correspondant au marqueId posté
        const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
    
        try {
          // Met à jour le bateau en base
          await this.connection.getRepository(Bateaux).update(id, {
            energie,
            longueur,
            place,
            puissance,
            date: new Date(date),
            renseignement,
            email
          });
        } catch(e) {
          console.log(e);
        }
      }
    
      async findAll(): Promise<BateauxDto[]> {
          try {
              return await this.connection.getRepository(Bateaux).find({
                  relations: ['marque']
              });
          } catch(e) {
              console.log(e);
          }
      }

      async findById(id): Promise<BateauxDto> {
          try {
            return await this.connection.getRepository(Bateaux).findOneOrFail(id, {
              relations: ['marque']
            });
          } catch(e) {
            console.log(e);
          }
      }

      async remove(id): Promise<void> {
          try {
            const bateau = await this.connection.getRepository(Bateaux).findOneOrFail(id);
            await this.connection.getRepository(Bateaux).remove(bateau);
          } catch(e) {
            console.log(e);
          }
      }
}
