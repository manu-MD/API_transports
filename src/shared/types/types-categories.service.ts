import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TypesCategories } from "./types-categories.entity";

@Injectable()
export class TypesCategoriesService {
    constructor (
        @InjectRepository(TypesCategories)
        private readonly repo: Repository<TypesCategories>,
    ){}

    create(TypesCategoriesService: TypesCategories): Promise<TypesCategories> {
        return this.repo.save(TypesCategoriesService);
    }

    findAll(): Promise<TypesCategories[]> {
        return this.repo.find();
    }
}