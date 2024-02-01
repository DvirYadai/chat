import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { Message } from "./Message"

@Entity()
export class Chat {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.id)
    user1_: User

    @ManyToOne(() => User, (user) => user.id)
    user2_: User

    @OneToMany(() => Message, (message) => message.chat_)
    messages: Message[];

    @Column()
    last_message_id: number
}