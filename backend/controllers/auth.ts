import { Request, Response } from "express";
import { hash, verify } from "@node-rs/argon2";

import { UserModel } from "../models/user.model";
import { errorResponse, Status, successResponse } from "../utils/api-response";
import { SessionModel } from "../models/session.model";
import { generateRandonString } from "../utils/crypto";

export const cookieName = `${process.env.NODE_ENV}-session-token`;

function createCookieOptions(expiresAt: Date) {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    expires: expiresAt,
    path: "/"
  } as const
}

async function signup(req: Request, res: Response) {
  try {
    const { firstname, email, password } = req.body;

    const isEmailExists = await UserModel.findOne({
      email
    });

    if (isEmailExists) {
      return res.status(409).json(errorResponse({
        status: Status.ERROR,
        code: 409,
        message: "Invalid email or password!"
      }));
    }

    const hashPassword = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });

    const userId = generateRandonString(20);

    const user = await UserModel.create({
      _id: userId,
      firstname,
      email,
      password: hashPassword
    });

    const sessionId = generateRandonString(20);

    const session = await SessionModel.create({
      _id: sessionId,
      expiresAt: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
      userId: user._id,
    });

    res
      .cookie(
        cookieName,
        session._id,
        createCookieOptions(session.expiresAt)
      )
      .status(201)
      .json(
        successResponse({
          code: 201,
          status: Status.SUCCESS,
          message: "Successfully created user",
          data: user
        })
      );
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An internal server error occured"
    }));
  }
}

async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const existinguser = await UserModel.findOne({
      email
    });

    if (!existinguser) {
      return res.status(409).json(errorResponse({
        status: Status.ERROR,
        code: 409,
        message: "Invalid email or password!"
      }));
    }

    const validPassword = verify(existinguser.password, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });

    if (!validPassword) {
      return res.status(400).json(errorResponse({
        status: Status.ERROR,
        code: 400,
        message: "Invalid username or password"
      }));
    }

    const sessionId = generateRandonString(20);

    const session = await SessionModel.create({
      _id: sessionId,
      expiresAt: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
      userId: existinguser._id,
    });

    res
      .cookie(
        cookieName,
        session._id,
        createCookieOptions(session.expiresAt)
      )
      .status(200)
      .json(
        successResponse({
          code: 200,
          status: Status.SUCCESS,
          message: "Successfully logged in",
          data: existinguser
        })
      );
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An internal server error occured"
    }));
  }
}

async function logout(req: Request, res: Response) {
  try {
    const sessionID = req.cookies[cookieName];

    if (!sessionID) {
      return res.status(400).json(errorResponse({
        status: Status.ERROR,
        code: 400,
        message: "Bad request"
      }));
    }

    await SessionModel.deleteOne({
      _id: sessionID
    });

    res.clearCookie(cookieName).status(200).json(successResponse({
      status: Status.SUCCESS,
      code: 200,
      message: "Successfully logged out"
    }));
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An internal server error occured"
    }));
  }
}

export default {
  signup,
  login,
  logout
}