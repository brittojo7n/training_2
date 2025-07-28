const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // log incoming requests to console
    console.log(`Incoming Request: ${req.method} ${req.url}`);

    // homepage
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Homepage!</h1><p>Try navigating to /about or /file</p>');
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
            try {
                const data = JSON.parse(body);
                console.log('Received data:', data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, receivedData: data }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Error: Invalid JSON format');
            }
        });
    }

    // file read and write
    else if (req.url === '/file') {
        // read
        if (req.method === 'GET') {
            fs.readFile('data.txt', 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('File not found. POST to /file to create it.');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            });
        }
        
        // write
        else if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                fs.writeFile('data.txt', body, (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Error writing to file.');
                        return;
                    }
                    res.writeHead(201, { 'Content-Type': 'text/plain' });
                    res.end('File written successfully.');
                });
            });
        }
        
        // handling other methods
        else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
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
