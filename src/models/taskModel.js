import path from 'path';
import { fileURLToPath } from 'url';

import { readFile, writeFile } from '../utils/fileSystemUtils.js';
import { generateTaskId } from '../utils/dataUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tasksJsonPath = path.join(__dirname, '../../data/tasks.json');

export const getAllTasks = async () => {
    const allTasks = await readFile(tasksJsonPath);

    return allTasks || [];
};

export const getTaskById = async (id) => {
    const tasks = await getAllTasks();
    const numericId = parseInt(id);

    return tasks.find(task => task.id === numericId);
};

export const createTask = async (task) => {
    const tasks = await getAllTasks();
    const newTask = {
        ...task,
        id: generateTaskId(tasks),
        createdAt: new Date().toISOString(),
    };

    await writeFile(tasksJsonPath, [...tasks, newTask]);

    return newTask;
};

export const updateTask = async (id, newTask) => {
    const tasks = await getAllTasks();
    const numericId = parseInt(id);
    const index = tasks.findIndex(task => task.id === numericId);

    if (index === -1) {
        return null;
    }

    const updatedTask = {
        ...tasks[index],
        ...newTask,
        id: tasks[index].id,
        createdAt: tasks[index].createdAt,
        updatedAt: new Date().toISOString(),
    };

    tasks[index] = updatedTask;

    await writeFile(tasksJsonPath, tasks);

    return updatedTask;
};

export const patchTaskStatus = async (id, status) => {
    return updateTask(id, { status });
};

export const deleteTask = async (id) => {
    const tasks = await getAllTasks();
    const numericId = parseInt(id);
    const filteredTasks = tasks.filter(task => task.id !== numericId);

    if (filteredTasks.length === tasks.length) {
        return false;
    }

    await writeFile(tasksJsonPath, filteredTasks);

    return true;
};