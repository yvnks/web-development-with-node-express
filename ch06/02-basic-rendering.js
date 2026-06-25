// basic usage
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log('server is running on port 3000');
});

// http://localhost:3000/about
