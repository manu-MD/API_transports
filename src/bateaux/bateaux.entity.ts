import { Marques } from "src/shared/marques/marques.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('bateaux')
export class Bateaux {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    energie: string;

    @Column()
    longueur: string;

    @Column()
    place: string;

    @Column()
    puissance: string;

    @Column({
        type: 'datetime'
    })
    date: Date;

    @Column()
    renseignement: string;

    @Column()
    email: string;
    
    @ManyToOne(
        () => Marques,
    )
    marque: Marques
}