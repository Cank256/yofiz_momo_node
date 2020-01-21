const http = require('http'); const hostname = 'http://yofiz-momo-nodejs-yofiz.apps.us-east-1.starter.openshift-online.com/';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}); server.listen(hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});