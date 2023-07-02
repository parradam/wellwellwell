import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dayRouter from './routes/dayRouter.js';
import userRouter from './routes/userRouter.js';
import errorHandler from './utils/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/days', dayRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

export default app;
