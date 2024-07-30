import mongoose from "mongoose";

export interface SessionDoc {
  _id: string,
  userId: string,
  expiresAt: Date
  createdAt?: Date,
  updatedAt?: Date
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
  expiresAt: {
    type: Date,
    required: true
  }
}, {
  _id: false,
  timestamps: true
});

export const SessionModel = mongoose.model<SessionDoc>("session", schema);