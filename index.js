import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!!')
});

app.post('/auth/login', (req, res) => {
  console.log(req.body);

  const token = jwt.sign({
    email: req.body.email,
    fullName: "Вася Пупкин"
  }, 'cdjinijd');

  res.json({
    success: true,
    token,
  })
});

app.listen(4444, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Server running...');
  }
});