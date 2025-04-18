import express from 'express';

import taskRoutes from './routes/taskRoutes.js'; 
import { logRequestsToConsole } from './utils/loggingUtils.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, _, next) => {
  logRequestsToConsole(req);
  next();
});
app.use('/api',taskRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err.stack || err.message || err);

  res.status(500).json({ message: 'Internal Server Error' });
});