import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, DeleteResult, Repository } from 'typeorm';
import { Couleurs } from './couleurs.entity';
import CouleurUpdateDto from './dto/couleur-update-dto';

@Injectable()
export class CouleursService {
    constructor(
        @InjectRepository(Couleurs)
        private readonly couleursRepository: Repository<Couleurs>,
        private connection: Connection
    ){}

    // Méthode Get findAll (rechercher toute les couleurs)
    async  findAll(): Promise<Couleurs[]> {
        return await this.couleursRepository.find();
    }

    // Méthode Get findById (rechercher une couleur par ID)
    async findById(id): Promise<Couleurs> {
        return await this.connection.getRepository(Couleurs).findOneOrFail(id);
    }

    // Méthode Post (création de couleur)
    async create(couleur: Couleurs): Promise<Couleurs> {
        return this.couleursRepository.save(couleur);
    }

    // Méthode Delete (supprimer ID de la couleur)
    async delete(id): Promise<DeleteResult> {
        return await this.couleursRepository.delete(id);
    }

    // Méthode Update (Modifier la couleur)
    async update(
      id, couleurUpdateDto: CouleurUpdateDto
    ) {
        const { couleur, } = couleurUpdateDto;
        // Recherche couleur correspondant à id
        const couleurs = await this.findById(id);
        couleurs.couleur = couleur;

        try {
            // Met à jour la BDD
            await this.connection.getRepository(Couleurs).save(couleurs);
        } catch(e) {
            console.log(e);
        }
    }
}
