const http = require('http');
const url = require('url');
const util = require('util');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    fs.readFile(path.resolve(__dirname, './page', path.basename(pathname)), (err, data) => {
        if (err) {
            console.log('err:', err)
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.write(err.toString());
        } else {
            console.log('read file')
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data.toString());
        }
        res.end();
    })
}).listen(3000, '127.0.0.1', () => {

});