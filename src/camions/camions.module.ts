import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { CamionsController } from './camions.controller';
import { Camions } from './camions.entity';
import { CamionsService } from './camions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Camions
    ]),
    SharedModule
  ],
  controllers: [CamionsController],
  providers: [CamionsService]
})
export class CamionsModule {}
