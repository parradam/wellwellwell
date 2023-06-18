import mongoose from 'mongoose';
import { MONGODB_URL } from './config.js';

console.log(`connecting to ${MONGODB_URL}...`);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error('error connecting to MongoDB', error.message);
  });
