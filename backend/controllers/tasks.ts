import { Request, Response } from "express";
import { errorResponse, Status, successResponse } from "../utils/api-response";
import { generateRandonString } from "../utils/crypto";
import { TaksDoc, TasksModel } from "../models/task.model";

async function createTask(req: Request, res: Response) {
  try {
    const { title, description, status, priority, deadline } = req.body;
    const user = res.locals.user;

    const task = await TasksModel.create({
      _id: generateRandonString(20),
      userId: user._id,
      title,
      description,
      status,
      priority,
      deadline
    });

    res.status(201).json(successResponse({
      status: Status.SUCCESS,
      code: 201,
      message: "task created",
      data: task
    }));
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An Internal server error occured"
    }));
  }
}

async function getAllTasks(req: Request, res: Response) {
  try {
    const user = res.locals.user;

    const allTasks = await TasksModel.find({
      userId: user._id
    });

    res.status(200).json(successResponse({
      status: Status.SUCCESS,
      code: 200,
      message: "successfully returned tasks",
      data: allTasks
    }));
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An Internal server error occured"
    }));
  }
}

async function deleteTask(req: Request, res: Response) {
  try {
    const taskId = req.params.taskId;
    const user = res.locals.user;

    if (!taskId) {
      return res.status(400).json(errorResponse({
        status: Status.ERROR,
        code: 400,
        message: "Bad request"
      }));
    }

    const isUserTask = await TasksModel.findOne({
      _id: taskId,
      userId: user._id
    });

    if (!isUserTask) {
      return res.status(403).json(errorResponse({
        status: Status.ERROR,
        code: 403,
        message: "forbidden"
      }));
    }

    await TasksModel.deleteOne({
      _id: taskId,
      userId: user._id
    });

    res.status(200).json(successResponse({
      status: Status.SUCCESS,
      code: 200,
      message: "Successfully deleted task"
    }));
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An Internal server error occured"
    }));
  }
}

async function updateTaks(req: Request, res: Response) {
  try {
    const { title, description, status, priority, deadline } = req.body;
    const taskId = req.params.taskId;
    const user = res.locals.user;

    if (!taskId) {
      return res.status(400).json(errorResponse({
        status: Status.ERROR,
        code: 400,
        message: "Bad request"
      }));
    }

    const isUserTask = await TasksModel.findOne({
      _id: taskId,
      userId: user._id,
    });

    if (!isUserTask) {
      return res.status(404).json(errorResponse({
        status: Status.ERROR,
        code: 404,
        message: "task not found"
      }));
    }

    await TasksModel.updateOne({
      _id: taskId,
    }, {
      title,
      description,
      status,
      priority,
      deadline
    });

    res.status(200).json(successResponse({
      status: Status.SUCCESS,
      code: 200,
      message: "Successfully updated task"
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
  createTask,
  getAllTasks,
  deleteTask,
  updateTaks
}