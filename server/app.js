import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
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

const filename = fileURLToPath(import.meta.url);
const dir = dirname(filename);
const pathToPublic = join(dir, 'public');

const app = express();

// Handle CORS with additional options to set origin
// in development
app.use(cors(CORS_OPTIONS));

// Pass in global passport object, configure, initialize
passportConfig(passport);
app.use(passport.initialize());

// Handle cookies
app.use(cookieParser());

app.use('/login', express.static(`${pathToPublic}/login`));
app.use('/register', express.static(`${pathToPublic}/register`));

// The rest
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/days', dayRouter);
app.use('/api/users', userRouter);

// Middleware
// To serve frontend
app.use(
  passport.authenticate('jwt', { session: false }),
  // redirectToLoginIfNoUser,
  express.static(pathToPublic),
);

// Catch-all route for React frontend routes
app.get('*', (req, res) => {
  res.sendFile(join(pathToPublic, 'index.html'));
});

app.use(errorHandler);

export default app;
