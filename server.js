const PORT = 8080;  // You can change port from here
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));  // This is where you can change your file path
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/', router);
server.listen(PORT, () => console.log(`JSON Server is running on http://localhost:${PORT}`))