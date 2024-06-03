import { Request, Response } from "express";
import Task from "../models/taskModel";

export const index = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.status(200).json({ data: tasks, message: "" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export const store = async (req: Request, res: Response) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.create({
      title,
      description,
      completed,
      userId: req.userId,
    });
    res.status(201).json({ data: task, message: "Task created successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.userId !== req.userId) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ data: task, message: "" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.findById(req.params.id);
    if (!task || task.userId !== req.userId) {
      return res.status(404).json({ error: "Task not found" });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    task.save();
    res.status(200).json({ data: task, message: "Task updated successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.userId !== req.userId) {
      return res.status(404).json({ error: "Task not found" });
    }
    await Task.deleteOne({ _id: task.id });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
