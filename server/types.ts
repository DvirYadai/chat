import { Request } from "express";
import { User } from "./DB/src/entity/User";

export interface RequestAndUser extends Request {
    user?: any;
}