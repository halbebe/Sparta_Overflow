import express from 'express';
import { SERVER_PORT } from './src/constants/app.constant.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
