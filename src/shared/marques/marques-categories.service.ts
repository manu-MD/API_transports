import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MarquesCategories } from "./marques-categories.entity";

@Injectable()
export class MarquesCategoriesService {
    constructor(
        @InjectRepository(MarquesCategories)
        private readonly repo: Repository<MarquesCategories>,
    ){}

    create(marquesCategories: MarquesCategories): Promise<MarquesCategories> {
        return this.repo.save(marquesCategories);
    }

    async findAll(): Promise<MarquesCategories[]> {
        return this.repo.find();
    }
}