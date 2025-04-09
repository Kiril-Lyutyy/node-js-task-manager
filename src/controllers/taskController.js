import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    patchTaskStatus,
    deleteTask
} from '../models/taskModel.js';
import { ValidationError } from '../utils/validationErrors.js';
import { validateTask, validateStatus } from '../utils/validationUtils.js';

const handleWithValidation = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (err) {
        if (err instanceof ValidationError) {
            res.statusCode = 400;

            return res.json({ message: err.message });
        }

        next(err);
    }
};

export const handleGetAllTasks = async (req, res) => {
    const status = req.query.status;
    let tasks = await getAllTasks();

    if (status) {
        tasks = tasks.filter(task => task.status === status.toLowerCase());
    }

    res.statusCode = 200;
    res.json(tasks);
}

export const handleGetSortedTasks = async (req, res) => {
    const sortBy = req.query.by;
    const validFields = ['createdAt', 'updatedAt'];

    if (!validFields.includes(sortBy)) {
        res.status = 400;

        return res.json({ message: `Can only sort by: ${validFields.join(', ')}` });
    }
    
    const tasks = await getAllTasks();
    const sortedTasks = tasks.sort((a, b) => {
        return new Date(a[sortBy]) - new Date(b[sortBy]);
    });

    res.status = 200;
    res.json(sortedTasks);
}

export const handleGetTaskById = async (req, res) => {
    const task = await getTaskById(req.params.id);

    if (!task) {
        res.statusCode = 404;

        return res.json({ message: 'Task not found' });
    };

    res.statusCode = 200;
    res.json(task);
}

export const handleCreateTask = handleWithValidation(async (req, res) => {
    validateTask(req.body);
    const task = await createTask(req.body);
    res.statusCode = 201;
    res.json(task);
})

export const handleUpdateTask = handleWithValidation(async (req, res) => {
    validateTask(req.body);
    const task = await updateTask(req.params.id, req.body);

    if (!task) {
        res.statusCode = 404;

        return res.json({ message: 'Task not found' });
    }

    res.statusCode = 200;
    res.json(task);
})

export const handlePatchTask = handleWithValidation(async (req, res) => {
    const { status } = req.body;
    validateStatus(status);
    const task = await patchTaskStatus(req.params.id, status);

    if (!task) {
        res.statusCode = 404;

        return res.json({ message: 'Task not found' });
    }

    res.statusCode = 200;
    res.json(task);
})

export const handleDeleteTask = async (req, res) => {
    try {
        const success = await deleteTask(req.params.id);

        if (!success) {
            res.statusCode = 404;
    
            return res.json({ message: 'Task not found' });
        }
    
        res.status = 204;
        res.send();
    } catch (err) {
        next(err);
    }
}