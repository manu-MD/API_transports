import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { MotosController } from './motos.controller';
import { Motos } from './motos.entity';
import { MotosService } from './motos.service';

@Module({
  controllers: [MotosController],
  providers: [MotosService],
  imports: [
    TypeOrmModule.forFeature([
      Motos
    ]),
    SharedModule
  ],
  exports:[SharedModule],
})

export class MotosModule {
  
}
