const express = require('express');
const expressHandlebars = require('express-handlebars');
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 3000;

const app = express();

// Configure handlebars engine
app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
  }),
);

app.set('view engine', 'handlebars');

// response codes other than 200 and 300
app.get('/error', (req, res) => {
  res.status(500);
  res.render('error');
});

app.listen(PORT, () =>
  console.log(
    `Express started on http://localhost:${PORT};` +
      '\nPress Ctrl + C to terminate.',
  ),
);

/*
// Custome 404 Page.
app.use((req, res) => {
  res.status(404).sendFile('./views/about.html', { root: __dirname });
});

// Custom 500 Page.
app.use((req, res) => {
  res.status(500).sendFile()
});
*/