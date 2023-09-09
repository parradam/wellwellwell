import express from 'express';
import passport from 'passport';
import {
  createUser,
  getUserProfile,
  logInUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/login', logInUser);

router.post('/register', createUser);

router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).json({ success: true, message: 'Authenticated' });
  },
);

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  getUserProfile,
);

export default router;
