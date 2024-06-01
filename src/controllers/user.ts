import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { getUserByUserId, getUserByEmail } from "../services/user";
import generateToken from "../utils/jwt";

import db from "../db";
import { users } from "../schema";

export const handleGetUserByUserId = async (req: Request, res: Response) => {
  console.log("handleGetUserByUserId");
  const userId = req.params.id;
  const users = await getUserByUserId(userId);
  res.json(users);
};

export const handleLoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = generateToken(user.id);
  res.status(200).json({ token });
};

export const handleCreateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const [newUser] = await db
    .insert(users)
    .values({
      email,
      password: hashedPassword,
      role: "user",
    })
    .returning({ insertedId: users.id });

  console.log("newUser", newUser);
  const token = generateToken(newUser.insertedId);
  res.status(201).json({ token, user });
};
