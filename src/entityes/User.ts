import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({
        unique:true,
    })
    email:string;

    @Column()
    password:string;
};