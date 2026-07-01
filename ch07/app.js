const express = require('express');
const PORT = process.env.PORT || 3000;
console.log(PORT);

const app = express();

// Register view engine.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  blogs = [
  {
    userId: 'Bob',
    dateCreated: 'June 26, 2026',
    title: 'Why I Love Express JS',
    msg: `Express JS has completely changed how i build APIs. 
      The automatic routing and documentation, type hints, 
      and async support makes development smoother and easier. 
      Plus the perfomance is incredible though it has a sharp learning curve`,
  },
  {
    userId: 'Jane',
    dateCreated: 'June 28, 2026',
    title: 'Why I Love Fast API',
    msg: `Fast API has completely changed how i build APIs. 
      The automatic routing and documentation, type hints, 
      and async support makes development smoother and easier. 
      Plus the perfomance is incredible though it has a sharp learning curve`,
  },
  {
    userId: 'Jeff',
    dateCreated: 'June 21, 2026',
    title: 'Async / Await Finally Clicked.',
    msg: `I have been struggling with async programming for months, 
      but express Js's approach finally made it click. Using await for async
      function to return Promises instead of .then() hell just makes so much sense.`,
  },
];
  res.render('main', { title: 'Home', blogs });
});

// Custom about page.
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/register-patient', (req, res) => {
  res.render('register-patient', { title: 'Sign up' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

// http://localhost:5000
app.listen(PORT, () => {
  console.log(
    `Server is running on PORT: ${PORT}` + 'Press Ctrl + C to terminate.',
  );
});
