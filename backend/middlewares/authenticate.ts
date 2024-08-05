import { Request, Response, NextFunction } from "express";
import { errorResponse, Status } from "../utils/api-response";
import { cookieName } from "../controllers/auth";
import { SessionDoc, SessionModel } from "../models/session.model";
import { UserDoc } from "../models/user.model";

interface SessionUserAggregate extends SessionDoc {
  userDoc: UserDoc[] | []
}

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const sessionId = req.cookies[cookieName];
    console.log("The id", req.cookies);

    if (!sessionId) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "unauthorized"
      }));
    }

    const sessionAndUserData = await SessionModel.aggregate<SessionUserAggregate>([
      { $match: { _id: sessionId } },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userDoc"
        }
      }
    ]);

    if (sessionAndUserData.length <= 0) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "unauthorized"
      }));
    }

    if (sessionAndUserData[0]?.userDoc.length <= 0) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "unauthorized"
      }));
    }

    const { userDoc, ...sessionDoc } = sessionAndUserData[0];

    if (Date.now() > sessionDoc.expiresAt.getTime()) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "session expired"
      }));
    }

    res.locals.user = userDoc[0];
    res.locals.session = sessionDoc

    next();
  } catch (err) {
    res.status(401).json(errorResponse({
      status: Status.ERROR,
      code: 401,
      message: "unauthorized"
    }));
  }
}