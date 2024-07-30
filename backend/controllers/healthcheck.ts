import { Request, Response } from "express";

import { Status, successResponse } from "../utils/api-response";

function healthcheck(req: Request, res: Response) {
  res.status(200).json(successResponse({
    status: Status.SUCCESS,
    code: 200,
    message: "Success",
    data: {
      uptime: new Date()
    }
  }));
}

export default {
  healthcheck
}