import { Router } from "express";
import { all_data_get } from "../controllers/dataController";
export const router = Router();

router.get("/all", all_data_get);