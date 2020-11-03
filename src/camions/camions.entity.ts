import { Marques } from "src/shared/marques/marques.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('camions')
export class Camions {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    genre: string;

    @Column()
    poids: string;

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
        // author => author.articles
    )
    marque: Marques
}
