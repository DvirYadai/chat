import { Router } from "express";
import { login_post, logout_get, signup_post, verify_user } from "../controllers/userController";
export const router = Router();

router.post("/signup", signup_post);
router.post("/login", login_post);
router.post("/verify", verify_user);
router.get("/logout", logout_get);
