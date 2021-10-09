import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());

const welcome = JSON.stringify({ message: 'Hello, welcome to Green Mountain!' });

app.get('/', (req, res) => res.json(welcome));

app.post('/receive', (req, res) => {
  console.log(req.body);
  res.json({
    message: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${PORT}`);
});
