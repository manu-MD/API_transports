import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([
      Users
    ])
    
  ],
  exports: [UsersService],
})

export class UsersModule {

}
