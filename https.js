

const https = require('node:https');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 443;

const options = {
  key: fs.readFileSync('keys/9443323_test.ephraim.site.key'),
  cert: fs.readFileSync('keys/9443323_test.ephraim.site.pem'),
};

https.createServer(options, (req, res) => {
  console.log(req.headers);
  res.writeHead(200);
  res.end('hello world\n');
}).listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});