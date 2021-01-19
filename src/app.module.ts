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
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CamionsModule } from './camions/camions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'moyens_de_transports',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema : false,
    }),
    VoituresModule,
    MotosModule,
    BateauxModule,
    SharedModule,
    UsersModule,
    AuthModule,
    CamionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
