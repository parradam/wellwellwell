import express from 'express';
import createUser from '../controllers/userController.js';

const router = express.Router();

// router.post('/login', (req, res, next) => {});

router.post('/register', createUser);

export default router;
