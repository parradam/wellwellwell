import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dayRouter from './routes/dayRouter.js';
import errorHandler from './utils/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/days', dayRouter);

app.use(errorHandler);

export default app;
