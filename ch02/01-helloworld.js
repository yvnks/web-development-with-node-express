const http = require('node:http');
const PORT = process.env.PORT || 3000;

// Expand hello world server by adding Routes.
const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p>Welcome! Home Page </p>');
  } else if (path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p> About Page. </p>');
  } else {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('<p> 404 - Page not found. </p> ');
  }
});

// Start server and navigate to http://localhost:3000
server.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}` + 'Press Ctrl + c to cancel.');
});
