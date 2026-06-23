const http = require('node:http');
const PORT = process.env.PORT || 3000;
const fs = require('node:fs');

console.log(__dirname);

// Serve static HTML files
function serveStaticHTML(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end('<p> 500 - Internal server error </p>');
    }

    res.writeHead(responseCode, { 'Content-Type': contentType });
    res.end(`<p>${data}</p>`);
  });
}

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/') {
    serveStaticHTML(res, '/public/home.html', 'text/html');
  } else if (path === '/about') {
    serveStaticHTML(res, '/public/about.html', 'text/html');
  } else if (path === '/img/logo') {
    serveStaticHTML(res, '/public/img/logo.png', 'image/png');
  } else {
    serveStaticHTML(res, '/public/404.html', 'text/html');
  }
});

// Start server and navigate to http://localhost:3000
server.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}` + 'Press Ctrl + c to cancel.');
});
