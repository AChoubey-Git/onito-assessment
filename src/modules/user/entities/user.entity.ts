import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';

@Entity({ name: "users" })
export class User {
    @Column({ unique: true })
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;



}