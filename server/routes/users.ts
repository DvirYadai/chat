import { Router } from "express";
import { login_post, logout_get, signup_post, token_get } from "../controllers/userController";
export const router = Router();

router.post("/signup", signup_post);
router.post("/login", login_post);
router.get("/logout", logout_get);
router.get("/token", token_get);
