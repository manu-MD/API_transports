import { Body, Controller, Delete, Get, Param, Post, Put, Req, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import UserCreateDto from './dto/user-create.dto';
import UserUpdateDto from './dto/user-update.dto';
import UsersDto from './dto/user.dto';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private us: UsersService
    ){

    }

    @Get()
    findAll(): Promise<UsersDto[]> {
        return this.us.findAll();
    }    

    @Get(':id')
    findById(
        @Param('id') id: string, 
    ): Promise<UsersDto> {
        return this.us.findById(id);
    }

    @Post()
    create(
        @Body() userCreateDto: UserCreateDto
    ): Promise<Users> {
        return this.us.create(userCreateDto);
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() userUpdateDto: UserUpdateDto
    ) {
        return this.us.update(id, userUpdateDto);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return this.us.remove(id);
    }
}
