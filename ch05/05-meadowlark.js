const express = require('express');
const { engine } = require('express-handlebars');
const fortune = require('./lib/fortune.js');
const handlers = require('./lib/handlers.js');

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

app.get('/', handlers.home);

app.get('/about', handlers.about);

// Custom 404 Page.
app.use(handlers.notFound);

// Custom 500 Page.
app.use(handlers.serverError);

app.listen(PORT, () =>
  console.log(
    `Express started on http://localhost:${PORT};` +
      '\nPress Ctrl + C to terminate.',
  ),
);
