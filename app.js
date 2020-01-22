const http = require('http')
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(server_port, server_ip_address, () => {
    console.log("Hello, your Listening on " + server_ip_address + ", Port " + server_port);
});
