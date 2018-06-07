const http = require('http');
const app = require('./app');
const port =3000;

console.log("Server starting at"+port);
const server = http.createServer(app); 
server.listen(port);