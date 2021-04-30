const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello world in express.');
});

app.get('*', (req, res) => {
  res.send('404 | Page no found.');
});

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});
