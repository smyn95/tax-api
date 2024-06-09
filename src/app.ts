import express, { Request, Response } from 'express';

const app = express();
const port = 18500;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
