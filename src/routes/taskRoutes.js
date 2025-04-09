import express from 'express';
import { 
    handleCreateTask, 
    handleDeleteTask, 
    handleGetAllTasks, 
    handleGetSortedTasks, 
    handleGetTaskById, 
    handlePatchTask, 
    handleUpdateTask 
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks/sorted', handleGetSortedTasks);
router.get('/tasks/:id', handleGetTaskById);
router.get('/tasks', handleGetAllTasks);
router.post('/tasks', handleCreateTask);
router.put('/tasks/:id', handleUpdateTask);
router.patch('/tasks/:id/status', handlePatchTask);
router.delete('/tasks/:id', handleDeleteTask);

export default router;
