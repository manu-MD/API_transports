// import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Repository } from "typeorm";
// import { CouleursCategories } from "./couleurs-categories.entity";

// @Injectable()
// export class CouleursCategoriesService {
//     constructor(
//         @InjectRepository(CouleursCategories)
//         private readonly Repo: Repository<CouleursCategories>,
//     ){}

//     create(CouleursCategoriesService: CouleursCategories): Promise<CouleursCategories> {
//         return this.Repo.save(CouleursCategoriesService);
//     }

//     findAll(): Promise<CouleursCategories[]> {
//         return this.Repo.find();
//     }
// }