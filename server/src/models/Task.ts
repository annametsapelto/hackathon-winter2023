import mongoose, { Document } from "mongoose";
export type TTask = Document & {
  text: string;
  date: string;
  users: Array<string>;
  status: string;
};

type TStatus = "no-status" | "complete" | "pending";

const schema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  users: {
    type: Array,
    required: true,
  },
});

export default schema;
