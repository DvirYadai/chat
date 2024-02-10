import { NextFunction, Response } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { RequestAndUser } from "../types";
import { AppDataSource } from "../DB/src/data-source";
import { User } from "../DB/src/entity/User";

const userRepository = AppDataSource.getRepository(User)

export const checkUser = async (req: RequestAndUser, res: Response, next: NextFunction) => {
  if (req.cookies.jwt) {
    const token = req.cookies.jwt;
    jwt.verify(token, process.env.SECRET_KEY as string, async (err: VerifyErrors | null, decodedToken?: any) => {
      if (err) {
        return res.status(403).send("Invalid access Token");
      } else {
        const user = await userRepository.findOneBy({
          id: decodedToken.user.id,
      })
        req.user = user
        next();
      }
    });
  } else {
    return res.status(401).send("Access Token Required");
  }
}