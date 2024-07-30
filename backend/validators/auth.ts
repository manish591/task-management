import { Request, Response, NextFunction } from "express";
import zod from "zod";

import { errorResponse, Status } from "../utils/api-response";

async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      firstname: zod.string().min(3).max(25),
      email: zod.string().email(),
      password: zod.string().min(8).max(256)
    }).strict();

    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    res.status(400).json(errorResponse({
      code: 400,
      status: Status.ERROR,
      message: "Bad request"
    }));
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      email: zod.string().email(),
      password: zod.string().min(6).max(256)
    }).strict();

    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    res.status(400).json(errorResponse({
      code: 400,
      status: Status.ERROR,
      message: "Bad request"
    }));
  }
}

export default {
  signup,
  login
}