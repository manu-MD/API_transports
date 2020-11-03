import { Injectable } from '@nestjs/common';
import { Couleurs } from 'src/shared/couleurs/couleurs.entity';
import { Marques } from 'src/shared/marques/marques.entity';
import { Types } from 'src/shared/types/types.entity';
import { Connection } from 'typeorm';
import MotoCreateDto from './dto/moto-create.dto';
import MotoUpdateDto from './dto/moto-update.dto';
import MotosDto from './dto/moto.dto';
import { Motos } from './motos.entity';

@Injectable()
export class MotosService {
    constructor(
        private connection: Connection
        // @InjectRepository(Motos)
        // private readonly motosRepository: Repository<Motos>,
    ){}

    async create(motoCreateDto: MotoCreateDto): Promise<Motos> {
        const { marqueId, typeId, couleurId, cylindree, date, renseignement, email } = motoCreateDto;
        try {
            // Recherche l'objet couleur correspondant au couleurId posté
            const couleur = await this.connection.getRepository(Couleurs).findOneOrFail(couleurId);
            // Recherche l'objet marque correspondant au marqueId posté
            const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
            // Recherche l'objet type correspondant au typeId posté
            const type = await this.connection.getRepository(Types).findOneOrFail(typeId);
            // Créer l'objet à insérer en bdd
            const motoObj = this.connection.getRepository(Motos).create({
              date: new Date(date),
              cylindree,
              renseignement,
              email,
              couleur,
              marque,
              type
            });
        // Sauvegarde l'objet en bdd
        return await this.connection.getRepository(Motos).save(motoObj);
        } catch(e) {
            console.log(e);
        }
    }
     
    async update(
        id,
        MotoUpdateDto: MotoUpdateDto
        ) {
        const { marqueId, typeId, couleurId, cylindree, date, renseignement, email } = MotoUpdateDto;
    
        // Recherche de la voiture à modifier
        await this.connection.getRepository(Motos).findOneOrFail(id);
        // Recherche couleur
        const couleur = await this.connection.getRepository(Couleurs).findOneOrFail(couleurId);
        // Recherche l'objet marque correspondant au marqueId posté
        const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
        // Recherche l'objet type correspondant au typeId posté
        const type = await this.connection.getRepository(Types).findOneOrFail(typeId);
    
        try {
          // Met à jour la voiture en base de données
          await this.connection.getRepository(Motos).update(id, {
            date : new Date(date),
            renseignement,
            cylindree,
            email,
            couleur,
            marque,
            type
          });
        } catch(e) {
          console.log(e);
        }
      }

    async findAll(): Promise<MotosDto[]> {
      try {
        return await this.connection.getRepository(Motos).find({
          relations:[              
            'marque',
            'couleur',
            'type'
          ]             
        });
       } catch(e) {
           console.log(e);
       }
    }

    async findById(id): Promise<MotosDto> {
      try {
        return await this.connection.getRepository(Motos).findOneOrFail(id, {
          relations: [
            'marque',
            'couleur',
            'type'
          ]
        });
      } catch(e) {
        console.log(e);
      }
    }

    async remove(id): Promise<void> {
      try {
        const moto = await this.connection.getRepository(Motos).findOneOrFail(id);
        await this.connection.getRepository(Motos).remove(moto);
      } catch(e) {
        console.log(e);
      }
    }
}
