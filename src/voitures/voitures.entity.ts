import { Couleurs } from "src/shared/couleurs/couleurs.entity";
import { Marques } from "src/shared/marques/marques.entity";
import { Types } from "src/shared/types/types.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('voitures')
export class Voitures {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column({
        nullable: true
    })
    observation: string;

    @Column()
    email: string;

    @Column()
    status: boolean;

    @ManyToOne(
        () => Marques,
    )
    marque: Marques;

    @ManyToOne(
        () => Types,
    )
    type: Types;

    @ManyToOne(
        () => Couleurs,
    )
    couleur: Couleurs;
}
