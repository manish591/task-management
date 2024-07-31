import { Request, Response, NextFunction } from "express";
import zod from "zod";

import { errorResponse, Status } from "../utils/api-response";

async function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      title: zod.string(),
      description: zod.string().optional(),
      status: zod.enum(["completed", "in-progress", "todo", "under-review"]),
      priority: zod.enum(["low", "medium", "high"]).optional(),
      deadline: zod.date().optional()
    }).strict();

    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    res.status(400).json(errorResponse({
      status: Status.ERROR,
      code: 400,
      message: "Bad Request"
    }));
  }
}

async function updateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      title: zod.string().optional(),
      description: zod.string().optional(),
      status: zod.enum(["completed", "in-progress", "todo", "under-review"]).optional(),
      priority: zod.enum(["low", "medium", "high"]).optional(),
      deadline: zod.date().optional()
    }).strict();

    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    res.status(400).json(errorResponse({
      status: Status.ERROR,
      code: 400,
      message: "Bad Request"
    }));
  }
}

export default {
  createTask,
  updateTask
}