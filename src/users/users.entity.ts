import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
const bcrypt = require('bcrypt');


// export enum Role {
//     User = 'User',
//     Admin = 'Admin'
// }

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
    role: string;

    // @Column({
    //     type: 'enum',
    //     enum: Role,
    //     default: [Role.User]
    // })
    // role: Role;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
}
