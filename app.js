const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
  res.send('404 | Page no found.');
});

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});
