import mongoose from "mongoose";

enum TaskStatus {
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
  TODO = "todo",
  UNDER_REVIEW = "under-review"
}

enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high"
}


export interface TaksDoc {
  _id: string,
  userId: string,
  title: string,
  description?: string,
  status: TaskStatus.COMPLETED | TaskStatus.IN_PROGRESS | TaskStatus.TODO | TaskStatus.UNDER_REVIEW,
  priority?: TaskPriority.HIGH | TaskPriority.MEDIUM | TaskPriority.LOW,
  deadline?: Date
}

const schema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: false,
  },
  deadline: {
    type: Date,
    required: false,
  }
});

export const TasksModel = mongoose.model<TaksDoc>("tasks", schema);