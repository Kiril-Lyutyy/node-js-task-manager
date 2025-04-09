import express from 'express';
import { 
    handleCreateTask, 
    handleDeleteTask, 
    handleGetAllTasks, 
    handleGetTaskById, 
    handlePatchTask, 
    handleUpdateTask 
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks', handleGetAllTasks);
router.get('/tasks/:id', handleGetTaskById);
router.post('/tasks', handleCreateTask);
router.put('/tasks/:id', handleUpdateTask);
router.patch('/tasks/:id', handlePatchTask);
router.delete('/tasks/:id', handleDeleteTask);

export default router;
