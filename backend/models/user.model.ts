import mongoose from "mongoose";

export interface UserDoc {
  _id: string,
  firstname: string,
  email: string,
  password: string
  createdAt?: Date,
  updatedAt?: Date
}

const schema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  _id: false,
  timestamps: true
});

export const UserModel = mongoose.model<UserDoc>("users", schema);