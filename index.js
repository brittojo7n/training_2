const http = require('http');

const server = http.createServer((req, res) => {
    // log incoming requests to console
    console.log(`Incoming Request: ${req.method} ${req.url}`);

    // homepage
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Homepage!</h1><p>Try navigating to /about</p>');
    } 
    
    // about page
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            message: 'This is the About page.',
            timestamp: new Date()
        }));
    } 
    
    // handle POST request to /data
    else if (req.url === '/data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log('Received data:', data);
            res.end();
        });
    }

    // Page Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

const PORT = 3000;
const HOSTNAME = '127.0.0.1'; 

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});