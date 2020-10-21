import { Couleurs } from "src/shared/couleurs/couleurs.entity";
import { Marques } from "src/shared/marques/marques.entity";
import { Types } from "src/shared/types/types.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Voitures {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    observation: string;

    @Column()
    email: string;

    @ManyToOne(
        () => Marques, 
        // author => author.articles
    )
    marque: Marques;

    @ManyToOne(
        () => Types, 
        // author => author.articles
    )
    type: Types;

    @ManyToOne(
        () => Couleurs, 
        // author => author.articles
    )
    couleur: Couleurs;
}