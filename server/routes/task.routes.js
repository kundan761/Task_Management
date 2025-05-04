import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/task.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const taskRouter = express.Router();

taskRouter.post("/createTask", authMiddleware, createTask);
taskRouter.get("/getAllTasks", authMiddleware, getAllTasks);
taskRouter.get("/getTaskById/:id", authMiddleware, getTaskById);
taskRouter.put("/updateTask/:id", authMiddleware, updateTask);
taskRouter.delete("/deleteTask/:id", authMiddleware, deleteTask);

export default taskRouter;
