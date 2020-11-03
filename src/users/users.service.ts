import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import UserCreateDto from './dto/user-create.dto';
import UserLoginDto from './dto/user-login.dto';
import UserUpdateDto from './dto/user-update.dto';
import { Users } from './users.entity';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
      private connection: Connection
  ) {

  }

  async create( userCreateDto: UserCreateDto):Promise<Users> {
      const{ lastName, firstName, email, password} = userCreateDto;
      try{
        // encrypte le mot de passe
        // const pass = await bcrypt.hash(password, 10);
        // console.log(pass);
        // créer l'objet user à insérer dans la base de données
        const userObj = this.connection.getRepository(Users).create({
          lastName,
          firstName,
          email,
          password
        });
      // sauvegarde l'objet user en bdd
        return await this.connection.getRepository(Users).save(userObj);
      } catch(e){
        console.log(e); 
      }     
  }

  async update(
    id,
    userUpdateDto: UserUpdateDto
    ) {
    const { lastName, firstName, email } = userUpdateDto;

    // Recherche de l'utilisateur à modifier
    const exists = await this.connection.getRepository(Users).findOneOrFail(id);

    try {
      // Met à jour l'utilisateur en base
      await this.connection.getRepository(Users).update(id, {
        lastName,
        firstName,
        email
      });
    } catch(e) {
      console.log(e);
    }
  }

  async findAll(): Promise<Users[]> {
    try {
      return await this.connection.getRepository(Users).find();
    } catch(e) {
      console.log(e);
    }
  }

  

  async findById(id): Promise<Users> {
      try {
        return await this.connection.getRepository(Users).findOneOrFail(id);
      } catch(e) {
        console.log(e);
      }
  }

  async remove(id): Promise<void> {
    try {
      const user = await this.connection.getRepository(Users).findOneOrFail(id);
      await this.connection.getRepository(Users).remove(user);
    } catch(e) {
      console.log(e);
    }
  }

  async findByEmail(email: string): Promise<Users | undefined> {
    try {   
      return await this.connection.getRepository(Users).findOne({ where: { email }});
    } catch(e) {
      console.log(e);
    }
  }  
}