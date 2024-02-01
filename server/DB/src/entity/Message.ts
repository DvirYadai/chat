import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { User } from "./User"
import { Chat } from "./Chat"
import { Group } from "./Group"

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Chat, (chat) => chat.messages)
    chat_: Chat;

    @ManyToOne(() => Group, (group) => group.id)
    group_: Group

    @ManyToOne(() => User, (user) => user.id)
    sender_: User

    @Column()
    message_content: string
    
    @CreateDateColumn({ type: 'timestamp' })
    timestamp: Date
}