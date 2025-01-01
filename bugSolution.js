const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle port in use error gracefully
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 8080 is already in use. Please choose a different port.');
    process.exit(1);
  } else {
    console.error(err);
  }
});

server.listen(8080); 
console.log('Server listening on port 8080');