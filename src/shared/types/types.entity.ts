import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypesCategories } from "./types-categories.entity";

@Entity()
export class Types {
    @PrimaryGeneratedColumn('uuid')
    id: string;
 
    @Column()
    type: string;

    @ManyToOne(
        () => TypesCategories
    )
    category: TypesCategories;
}