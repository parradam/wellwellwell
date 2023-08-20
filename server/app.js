import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import passport from 'passport';
import passportConfig from './utils/passport.js';
import dayRouter from './routes/dayRouter.js';
import userRouter from './routes/userRouter.js';
import errorHandler from './utils/errorHandler.js';

const app = express();

// Pass in global passport object and configure it
passportConfig(passport);

// Middleware
// To serve frontend
const filename = fileURLToPath(import.meta.url);
const dir = dirname(filename);

const pathToPublic = join(dir, 'public');
app.use(express.static(pathToPublic));

// The rest
app.use(passport.initialize());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/days', dayRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

export default app;
