/* eslint-disable no-console */
import mongoose from 'mongoose';
import { NODE_ENV, MONGODB_URL } from './config.js';

let dbConnection;

export const openConnection = async () => {
  if (NODE_ENV === 'development')
    console.log(`connecting to ${MONGODB_URL}...`);

  try {
    dbConnection = await mongoose.connect(MONGODB_URL);
    if (NODE_ENV === 'development') console.log('connected to MongoDB');
  } catch (error) {
    if (NODE_ENV === 'development')
      console.error('error connecting to MongoDB', error.message);
  }
};

export const closeConnection = async () => {
  if (dbConnection) {
    await dbConnection.disconnect();
    if (NODE_ENV === 'development') console.error('disconnected from MongoDB');
  }
};
