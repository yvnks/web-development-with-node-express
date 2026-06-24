const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

// Configure handlebars engine
app.engine(
  'handlebars',
  expressHandlebars({
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text/html');
  res.send('<p>Meadowlark Travel</p>');
});

app.get('/about', (req, res) => {
  res.type('text/html');
  res.send('<p>Meadowlark About Page.</p>');
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
