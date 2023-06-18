import express from 'express';
import { createDay, getDays } from '../controllers/dayController.js';

const router = express.Router();

router.post('/', createDay);

router.get('/', getDays);

export default router;
