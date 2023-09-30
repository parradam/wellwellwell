import express from 'express';
import passport from 'passport';
import { createDay, removeDay, getDays } from '../controllers/dayController.js';

const router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), createDay);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  removeDay,
);

router.get('/', passport.authenticate('jwt', { session: false }), getDays);

export default router;
