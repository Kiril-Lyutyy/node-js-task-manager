import express from 'express';
import { logRequestsToConsole } from './utils/loggingUtils';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, _, next) => {
  logRequestsToConsole(req);
  next();
});

app.get('/', (_, res) => {
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});