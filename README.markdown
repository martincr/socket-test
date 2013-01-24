README.markdown
--

npm install socket.io
npm install socket.io express
npm install express

Changed port to 3000

Execute server with:
node app.js

Browse to:
http://127.0.0.1:3000

git init
git add .
git commit -m "init"

*** app.js Code updated from:
http://stackoverflow.com/questions/6411070/nodejs-socket-io-simple-client-server-example-not-working?rq=1

TODO
--
Warning: express.createServer() is deprecated, express
applications no longer inherit from http.Server,
please use:

  var express = require("express");
  var app = express();

Socket.IO's `listen()` method expects an `http.Server` instance
as its first parameter. Are you migrating from Express 2.x to 3.x?
If so, check out the "Socket.IO compatibility" section at:
https://github.com/visionmedia/express/wiki/Migrating-from-2.