import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGO_DB_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

export default async function connectDB() {
  try {
    await mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`);
    console.log("Successfully connected to the database");
  } catch (err) {
    console.log("Unable to connect to the database", err);
    process.exit(1);
  }
}