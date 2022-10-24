## How to setup `json server` locally ❔

1. Open a folder where you would like to setup
2. `npm init -y`
3. `npm i json-server --save`
4. Create a file `server.js`
5. Inside `server.js` file paste below code

         const PORT = 3000;
        const path = require('path');
        const jsonServer = require('json-server');
        const server = jsonServer.create();
        const router = jsonServer.router(path.join(__dirname, 'db.json'));
        const middlewares = jsonServer.defaults();
        server.use(middlewares);
        server.use(jsonServer.bodyParser);
        server.use('/api', router);
        server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`))

6. In the terminal write command `node servere.js`

- Notes : You can change `port` according to yours `in the server.js` file and `path also`

7. If you don't want to run your server in the terminal again again when you change or add code 
   
     - Install `npm i nodemon`

8. Go to your package.json file add this code ` "start": "nodemon server.js"`    
     - write command `npm start` 

This package automatically detact code when you change or add and run server always for you