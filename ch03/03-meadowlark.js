const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

// Configure handlebars engine
app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
  }),
);

app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000;

// Middleware.
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.type('text/html');
  res.render('home');
});

app.get('/about', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune: randomFortune });
});

// Custom 404 Page.
app.use((req, res) => {
  res.type('text/html');
  res.status(404);
  res.send('<p> 404 - Not Found </p> ');
});

// Custom 500 Page.
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/html');
  res.status(500);
  res.send('<p> 500 - Internal Server Error. </p>');
});

app.listen(PORT, () =>
  console.log(
    `Express started on http://localhost:${PORT};` +
      '\nPress Ctrl + C to terminate.',
  ),
);

const fortunes = [
  'Conquer your fears or they will conquer you.',
  'Rivers need springs.',
  "Do not fear what you don't know.",
  'You will have a pleasant surprise.',
  'Whenever possible, keep it simple.',
];
