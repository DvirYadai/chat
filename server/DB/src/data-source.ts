import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Chat } from "./entity/Chat"
import { Group } from "./entity/Group"
import { GroupMembership } from "./entity/GroupMembership"
import { Message } from "./entity/Message"

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
    migrations: [],
    subscribers: [],
})