import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    password_hash: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date
}
