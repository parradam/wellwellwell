import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'production';
export const PORT = process.env.PORT || 8000;
export const IP = process.env.IP || 'localhost';
export const { MONGODB_URL } = process.env;
