import { Request, Response } from "express";
import { errorResponse, Status, successResponse } from "../utils/api-response";

async function getSelfdata(req: Request, res: Response) {
  try {
    const user = res.locals.user;

    const sanitizeUser = {
      _id: user._id,
      firstname: user.firstname
    }

    res.status(200).json(successResponse({
      status: Status.SUCCESS,
      code: 200,
      message: "Successfully returned user data",
      data: sanitizeUser
    }));
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An Internal server error occured"
    }));
  }
}

export default {
  getSelfdata
}