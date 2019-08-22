const fs = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end('This is the response!');
});



server.listen(3000, '127.0.0.1', () => {
    console.log('Listening for req now');
});