import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Couleurs {
    @PrimaryGeneratedColumn('uuid')
    id: string;
 
    @Column()
    couleur: string;
}