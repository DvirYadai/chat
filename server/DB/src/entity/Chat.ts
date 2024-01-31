import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn } from "typeorm"

@Entity()
export class Chat {

    @PrimaryGeneratedColumn()
    chat_id: number

    @Column()
    user1_id: number

    @Column()
    user2_id: number

    @Column()
    last_message_id: number
}