import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Types {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;
    
    @Column()
    category: string;
}