import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { BateauxController } from './bateaux.controller';
import { Bateaux } from './bateaux.entity';
import { BateauxService } from './bateaux.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bateaux
    ]),
    SharedModule
  ],
  controllers: [BateauxController],
  providers: [BateauxService]
})

export class BateauxModule {}
