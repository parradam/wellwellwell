import express from 'express';
import cors from 'cors';
import './utils/db.js';
import dayRouter from './routes/dayRouter.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/days', dayRouter);

export default app;
