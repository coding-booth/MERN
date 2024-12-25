    const http = require('http');

    console.log('I am here');

    const requestHandler = (req, res) => {
        console.log('I am in handler', req);
    }

    const server = http.createServer(requestHandler);
    const port = 3000;
    server.listen(port, () => {
        console.log(`Server running at: http://localhost:${port}`)
    });

  
  