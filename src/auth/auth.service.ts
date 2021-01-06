import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { compare, genSalt, hash } from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ){}

  async validateUser(email: string, pass: string): Promise<any> {
    // Recherche l'utilisateur par son mail
    const user = await this.usersService.findByEmail(email);
    // Arrete le processus en cas d'erreur
    if (!user) {
      throw new HttpException(
        'Invalid email or password.',
        HttpStatus.BAD_REQUEST,
      );
    }
    // Compare les mots de passe cryptés
    const isMatch = await compare(pass, user.password);
    // Arrete le processus en cas d'erreur
    if (!isMatch) {
      throw new HttpException(
        'Invalid email or password.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Renvoi du user trouvé
    return user;
  }

  async login(body: any) {
    const user = await this.validateUser(body.email, body.password);

    const payload = { email: user.email, sub: user.userId, role: user.role };
    // Renvoi du token d'authentification
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
