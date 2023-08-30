/* eslint-disable no-console */
import mongoose from 'mongoose';
import { MONGODB_URL } from './config.js';

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // return mongoose.connection.db.dropDatabase(); // Optional: Drops the database if it already exists
  })
  .then(() => {
    console.log('Database "wellwellwell" created');
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error('Error creating database:', error);
    mongoose.disconnect();
  });
