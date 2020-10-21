import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AvionsService } from './avions.service';

@ApiTags('avions')
@Controller('avions')
export class AvionsController {

    constructor(
        private as: AvionsService
    ) {
        
    }
}
