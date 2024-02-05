import jwt, { VerifyErrors } from "jsonwebtoken";
import { User } from "../DB/src/entity/User";
import { Request, Response } from "express";
import { AppDataSource } from "../DB/src/data-source";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
// import crypto from "crypto";
// console.log(crypto.randomBytes(32).toString("hex"));

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (user: { username: string, email: string }) => {
  return jwt.sign({ user }, process.env.SECRET_KEY as string, {
    expiresIn: maxAge,
  });
};

const userRepository = AppDataSource.getRepository(User)

const signup_post = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const existEmail = await userRepository.findOneBy({
        email,
    })
    if (existEmail) {
      return res.status(409).send("Email already exist");
    }
    const existUser = await userRepository.findOneBy({
        username,
    })
    if (existUser) {
      return res.status(409).send("Username already exist");
    }
    const newUser = new User()
    newUser.email = email;
    newUser.username = username;
    newUser.password_hash = hashSync(password, genSaltSync(10))
    const userCreated = await userRepository.save(newUser)
    const token = createToken(userCreated);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ id: userCreated.id, username: userCreated.username, email: userCreated.email });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const login_post = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existUser = await userRepository.findOneBy({
        email,
    });
    if (!existUser) {
      return res.status(401).send("Incorrect email or password");
    }
    const auth = compareSync(password, existUser.password_hash);
    if (!auth) {
      return res.status(401).send("Incorrect email or password");
    }
    const token = createToken(existUser);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ id: existUser.id, username: existUser.username, email: existUser.email });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const logout_get = (req: Request, res: Response) => {
  res.cookie("jwt", "logged_out", { maxAge: 1 });
  res.status(200).send("user logged out");
};

const verify_user = async (req: Request, res: Response) => {
  const { id = '', email = '', username = '' } = req.body;
  const existUser = await userRepository.findBy({
    id,
    email,
    username,
  });
  if (!existUser.length) {
    return res.status(401).send("Unauthorized user");
  }
  if (req.cookies.jwt) {
    const token = req.cookies.jwt;
    jwt.verify(token, process.env.SECRET_KEY as string, async (err: VerifyErrors | null, decodedToken?: any) => {
      if (err) {
        return res.status(403).send("Invalid access Token");
      } else {
        return res.status(200).json({});
      }
    });
  } else {
    return res.status(401).send("Access Token Required");
  }
}

export { signup_post, login_post, logout_get, verify_user }
