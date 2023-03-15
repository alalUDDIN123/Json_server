## How to setup `json server` locally ❔

1. Open a folder where you would like to setup
2. `npm init -y`
3. `npm i json-server --save`
4. Create a file `db.json` and insert some json foramt data
5. Create a file `server.js`
6. Inside `server.js` file paste below code

        const PORT = 3000;  // You can change port from here
        const path = require('path');
        const jsonServer = require('json-server');
        const server = jsonServer.create();
        const router = jsonServer.router(path.join(__dirname, 'db.json'));  // This is where you can change your file path
        const middlewares = jsonServer.defaults();
        server.use(middlewares);
        server.use(jsonServer.bodyParser);
        server.use('/api', router);
        server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`))

7. In the terminal write command `node servere.js`

   - Notes : You can change `port` according to yours `in the server.js` file and `path also`

8. If you don't want to run your server in the terminal again again when you change or add code 
   
     - Install `npm i nodemon`

9. Go to your package.json file add this code ` "start": "nodemon server.js"`    
     - write command `npm start` 

This package automatically detact code when you change or add and run server always for you

---

## How to deploy json mock server ?

1. create a `json-server` as I described above.
2. push complete code on github (`repository should be public as recommanded`)
3. Open `render.com` :- https://render.com/ and `sign up` with github account
   - You will get a email verification on mail. Just validate that email.
4. On the render page you can see there a `NEW`. Just click there and you can select your repository.

## If You Face Any Problem Feel Free To Connect 
### Email : alalu75666@gmail.com
### LinkedIn : https://www.linkedin.com/in/alal-uddin-066444206/

## THANK YOU 🤗 🤗 🤗 🤗 🤗
