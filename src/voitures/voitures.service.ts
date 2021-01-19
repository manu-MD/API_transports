import { Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Couleurs } from 'src/shared/couleurs/couleurs.entity';
import { Marques } from 'src/shared/marques/marques.entity';
import { Types } from 'src/shared/types/types.entity';
import { Connection } from 'typeorm';
import VoitureCreateDto from './dto/voiture-create.dto';
import VoitureUpdateDto from './dto/voiture-update.dto';
import VoituresDto from './dto/voiture.dto';
import { Voitures } from './voitures.entity';

@Injectable()
export class VoituresService {
  constructor(
    private connection: Connection
  ) {
  }

  async create(voitureCreateDto: VoitureCreateDto, file ): Promise<Voitures> {
    console.log(voitureCreateDto);
    const { marqueId, typeId, couleurId, date, observation, email } = voitureCreateDto;
    try {
      // Recherche l'objet couleur correspondant au couleurId posté
      const couleur = await this.connection.getRepository(Couleurs).findOneOrFail(couleurId);
      // Recherche l'objet marque correspondant au marqueId posté
      const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
      // Recherche l'objet type correspondant au typeId posté
      const type = await this.connection.getRepository(Types).findOneOrFail(typeId);
      // Créer l'object à insérer en base de donnée
      const voitureObj = this.connection.getRepository(Voitures).create({
        date,
        observation,
        email,
        couleur,
        marque,
        type,
        photo: file.filename,
        mimetype: file.mimetype
      });
      // Sauvegarde l'objet en bdd
      return await this.connection.getRepository(Voitures).save(voitureObj);
    } catch(e) {
      console.log(e);
    }
  }

  async update(id, voitureUpdateDto: VoitureUpdateDto, file) {
    const { marqueId, typeId, couleurId, date, observation, email } = voitureUpdateDto;

    // Recherche de la voiture à modifier
    const exists = await this.connection.getRepository(Voitures).findOneOrFail(id);
    // Recherche couleur
    const couleur = await this.connection.getRepository(Couleurs).findOneOrFail(couleurId);
    // Recherche l'objet marque correspondant au marqueId posté
    const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
    // Recherche l'objet type correspondant au typeId posté
    const type = await this.connection.getRepository(Types).findOneOrFail(typeId);

    try {
      // Met à jour la voiture en base
      await this.connection.getRepository(Voitures).update(id, {
        date,
        observation,
        email,
        couleur,
        marque,
        type,
        photo: file.filename,
        mimetype: file.mimetype
      });
    } catch(e) {
      console.log(e);
    }
  }

  async updateDispo(
    id,
    // voitureUpdateDto: VoitureUpdateDto
  ) {
    // console.log(voitureUpdateDto);
    // const { status } = voitureUpdateDto;

    // Recherche de la voiture à modifier
    const exists = await this.connection.getRepository(Voitures).findOneOrFail(id);
    const status = !exists.status;

    try {
      // Met à jour la voiture en base
      await this.connection.getRepository(Voitures).update(id, {
        status,
      });
    } catch(e) {
      console.log(e);
    }
  }

  async findAll(): Promise<VoituresDto[]> {
    try {
      return await this.connection.getRepository(Voitures).find({
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

  async findById(id): Promise<Voitures> {
    try {
      return await this.connection.getRepository(Voitures).findOneOrFail(id, {
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
      const voiture = await this.connection.getRepository(Voitures).findOneOrFail(id);
      await this.connection.getRepository(Voitures).remove(voiture);
    } catch(e) {
      console.log(e);
    }
  }
}
