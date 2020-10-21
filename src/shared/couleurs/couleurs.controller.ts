import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Couleurs } from "./couleurs.entity";
import { CouleursService } from "./couleurs.service";

@ApiTags('couleurs')
@Controller('couleurs')
export class CouleurController {

    constructor(
        private cs: CouleursService
        ) {
    }

    @Get()
    findAll(): Promise<Couleurs[]> {
        return this.cs.findAll();
    }
}