import http from 'http';
import app from './app.js';
import { PORT } from './utils/config.js';

const server = http.createServer(app);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
