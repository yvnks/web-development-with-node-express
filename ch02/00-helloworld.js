// Build a server to render Hello World! on status code 200 OK!

const http = require('node:http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end('<p> Hello World! </p>');
});

// Start server and navigate to http://localhost:3000
server.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}` + 'Press Ctrl + c to cancel.');
});
