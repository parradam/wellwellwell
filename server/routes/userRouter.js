import express from 'express';
import { createUser, logInUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', logInUser);

router.post('/register', createUser);

export default router;
