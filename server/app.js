import express from 'express';
import 'express-async-errors';
import passport from 'passport';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passportConfig from './utils/passport.js';
import dayRouter from './routes/dayRouter.js';
import userRouter from './routes/userRouter.js';
import errorHandler from './utils/errorHandler.js';
import { CORS_OPTIONS } from './utils/config.js';

const app = express();

// Handle CORS with additional options to set origin
// in development
app.use(cors(CORS_OPTIONS));

// Pass in global passport object, configure, initialize
passportConfig(passport);
app.use(passport.initialize());

// Handle cookies
app.use(cookieParser());

// The rest
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/days', dayRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

export default app;
