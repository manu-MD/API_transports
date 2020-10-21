import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypesCategories } from "../types/types-categories.entity";
import { MarquesCategories } from "./marques-categories.entity";

@Entity()
export class Marques {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @ManyToOne(
        () => TypesCategories, 
        // author => author.articles
    )
    category: TypesCategories;
}