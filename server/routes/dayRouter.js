import express from 'express';
import passport from 'passport';
import { createDay, getDays } from '../controllers/dayController.js';

const router = express.Router();

router.post('/', createDay);

router.get('/', passport.authenticate('jwt', { session: false }), getDays);

export default router;
