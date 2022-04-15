const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // console.log(req.url)
  if(req.url ==  "/"){
    res.end('Hello World');

  }
  else if(req.url  == "/about"){
    res.end('Hello about ');

  }
  // res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});