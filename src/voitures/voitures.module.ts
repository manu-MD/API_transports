import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { VoituresController } from './voitures.controller';
import { Voitures } from './voitures.entity';
import { VoituresService } from './voitures.service';

@Module({
  controllers: [VoituresController],
  providers: [VoituresService],
  imports: [
    TypeOrmModule.forFeature([
      Voitures
    ]),
    SharedModule
  ],
  exports: [SharedModule]
})

export class VoituresModule {

}
