import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User } from "./User"
import { Group } from "./Group"

@Entity()
export class GroupMembership {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.id)
    user_: User

    @ManyToOne(() => Group, (group) => group.id)
    group_: Group
}