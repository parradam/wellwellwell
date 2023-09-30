import dotenv from 'dotenv';

dotenv.config();

const corsOptionsDev = {
  origin: 'http://localhost:5200', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  credentials: true,
};

export const NODE_ENV = process.env.NODE_ENV || 'production';
export const PORT = process.env.PORT || 8000;
export const IP = process.env.IP || 'localhost';
export const { MONGODB_URL } = process.env;
export const CORS_OPTIONS = NODE_ENV === 'development' ? corsOptionsDev : {};
