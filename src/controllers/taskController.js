import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    patchTaskStatus,
    deleteTask
} from '../models/taskModel.js';
import { validateTask } from '../utils/validationUtils.js';

export const handleGetAllTasks = async (_, res) => {
    const tasks = await getAllTasks();

    res.json(tasks);
}

export const handleGetTask = (req, res) => {
    //TODO: implement
}

export const handleCreateTask = (req, res) => {
    //TODO: implement
}

export const handleUpdateTask = (req, res) => {
    //TODO: implement
}

export const handlePatchTask = (req, res) => {
    //TODO: implement
}

export const handleDeleteTask = (req, res) => {
    //TODO: implement
}