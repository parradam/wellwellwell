import express from 'express';
import wellnessController from '../controllers/wellnessController.js';

const router = express.Router();

router.get('/', (req, res) => {
  wellnessController.get();
});

export default router;
