import express from 'express';
import wellnessRouter from './routes/wellnessRouter.js';

const app = express();

app.use('/wellness', wellnessRouter);

export default app;
