import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!!')
});

app.listen(4444, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Server running...');
  }
});