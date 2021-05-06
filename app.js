require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

const basics = {
  title: 'Curso node',
  author: 'Yesid Hernandez',
};

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    ...basics,
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    ...basics,
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    ...basics,
  });
});

app.get('*', (req, res) => {
  res.send('404 | Page no found.');
});

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});
