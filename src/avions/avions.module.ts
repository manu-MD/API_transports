import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marques } from 'src/shared/marques/marques.entity';
import { SharedModule } from 'src/shared/shared.module';
import { AvionsController } from './avions.controller';
import { Avions } from './avions.entity';
import { AvionsService } from './avions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Avions
    ]),
    SharedModule
  ],
  controllers: [AvionsController],
  providers: [AvionsService]
})

export class AvionsModule {}
