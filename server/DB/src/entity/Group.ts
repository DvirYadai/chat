import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Message } from "./Message";

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Message, (message) => message.group_)
    messages: Message[];
}