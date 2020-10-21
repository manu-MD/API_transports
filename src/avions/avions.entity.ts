// import { Marques } from "src/shared/marques/marques.entity";
import { Types } from "src/shared/types/types.entity";
import { Marques } from "src/shared/marques/marques.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Avions{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;
    
    @ManyToOne(
        () => Marques
    )
    marque: Marques;
    type: Types ;
}