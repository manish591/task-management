import { Request, Response } from "express";

function signup(req: Request, res: Response) {
  return res.json({
    message: "Sucess"
  });
}

export default {
  signup
}