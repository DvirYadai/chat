import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Chat } from "./entity/Chat"
import { Group } from "./entity/Group"
import { GroupMembership } from "./entity/GroupMembership"
import { Message } from "./entity/Message"
import { AddUser1627366244506 } from "./migration/UserMigration"
import { AddChat1627366244512 } from "./migration/ChatMigration"
import { AddMessages1627366244532 } from "./migration/MessageMigration"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "A1s2d3f4as",
    database: "chatapp",
    synchronize: true,
    logging: false,
    entities: [User, Chat, Group, GroupMembership, Message],
    migrations: [AddUser1627366244506, AddChat1627366244512, AddMessages1627366244532],
    subscribers: [],
})