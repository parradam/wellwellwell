/* eslint-disable no-console */

import http from 'http';
import app from './app.js';
import { PORT } from './utils/config.js';
import { openConnection, closeConnection } from './utils/db.js';

const startServer = async () => {
  try {
    await openConnection();
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('error starting the server:', error.message);
    closeConnection();
    process.exit(1);
  }
};

startServer();
