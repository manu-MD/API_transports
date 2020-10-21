import { Marques } from "src/shared/marques/marques.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bateaux {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    energie: string;

    @Column()
    longueur: string;

    @Column()
    place: string;

    @Column()
    puissance: string;

    @Column()
    date: Date;

    @Column()
    renseignement: string;

    @Column()
    email: string;
    
    @ManyToOne(
        () => Marques, 
        // author => author.articles
    )
    marque: Marques


}