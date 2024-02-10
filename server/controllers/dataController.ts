import { Response } from "express";
import { RequestAndUser } from "../types";
import { AppDataSource } from "../DB/src/data-source";
import { Chat } from "../DB/src/entity/Chat";

const chatRepository = AppDataSource.getRepository(Chat);

export const all_data_get = async (req: RequestAndUser, res: Response) => {
  const associatedChats = await chatRepository.find({
    where: [
        { user1_: req.user },
        { user2_: req.user },
    ],
    relations: {
      user1_: true,
      user2_: true
    }
  })
  console.log(associatedChats)
  return res.status(200).json({});
};