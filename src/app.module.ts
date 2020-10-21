import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoituresModule } from './voitures/voitures.module';
import { MotosModule } from './motos/motos.module';
import { BateauxModule } from './bateaux/bateaux.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path';
import { SharedModule } from './shared/shared.module';
import { MarquesService } from './shared/marques/marques.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'moyens_de_transports',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema : false,
    }),
    VoituresModule,
    MotosModule,
    BateauxModule,
    SharedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
