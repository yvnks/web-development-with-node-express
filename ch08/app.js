const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const handlers = require('./lib/handlers');

const app = express();

app.set('view engine', 'ejs');

// routes.
app.get('/', (req, res) => {
  res.status(200).render('home', { title: 'Home' });
});

app.get('/newsletter-signup', handlers.newsLetterSignUp);
app.post('/newsletter-signup/process', handlers.newsLetterSignUp);
app.get('newsletter-signup-thank-you', handlers.newsLetterSignUpThankYou);

// setup middleware & static files.
// app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
