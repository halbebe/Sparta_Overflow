import express from 'express';
import { SERVER_PORT } from './src/constants/app.constant.js';
import { apiRouter } from './src/routers/index.js';
import { errorHandler } from './src/middlewares/error-handler.middleware.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}`);
});
