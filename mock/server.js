const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = 8000;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.listen(port, () => {
  console.log('JSON Server is running');
});

server.get('plm/task', (request, response) => {
  if (request.method === 'GET') {
    const tasks = require('./tasks/index');
    response.status(200).jsonp(tasks());
  }
});

server.get('plm/product', (request, response) => {
  if (request.method === 'GET') {
    const products = require('./products/index');
    response.status(200).jsonp(products());
  }
});
