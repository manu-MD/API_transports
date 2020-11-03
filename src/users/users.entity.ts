import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
const bcrypt = require('bcrypt');

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }  
}