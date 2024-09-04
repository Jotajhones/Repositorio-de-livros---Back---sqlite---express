import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import { createTabel } from './controllers/controllers.js';

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
}));

createTabel();

app.use(router);

export default app;