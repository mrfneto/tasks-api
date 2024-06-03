import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  userId: string;
}

const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});

const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;
