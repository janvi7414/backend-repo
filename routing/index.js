// require is used to add any module or here express framework this was needed as without this we would have to use node's low level http module which is more complex
const express = require('express')

// this creates an instance of express application here app is server object used to define routes, add middleware and start the server
const app = express()
// this defines the port number to run the server at
const port = 3000

// this defines the get route here {root: _dirname} gives the current folder path
app.get('/', (req, res) => {
  // res.send('Get request sent')
  res.sendFile('./dummy.html',{root: __dirname});
})
app.post('/items', (req, res) => {
  // res.send('Post request sent')
  res.json({x:1, y:2, z:3})
})
app.put('/items/:id', (req, res) => {
  res.send('Put request sent to update')
})
app.delete('/items/:id', (req, res) => {
  res.send('Delete request sent')
})


// to start the server it has parameters a. port number b. callbackfunc
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// npm init -y ---> creates package.json
// npm install express  
// "ni index.js" or "New-Item index.js" or "type nul > index.js"  ---> create a empty file index.js 
// npm install nodemon 

// edit this in package.json 
//  "scripts": {
//     "dev": "nodemon index.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },

// npm run dev and visite to "localhost:3000"
// download postman to test he output
 
// Express.js is a fast, minimal web framework for Node.js used to build web applications and REST APIs.

// Node.js is a runtime env which allows us to run js on outside the browser(server or backend) earlier we were able to run it only on the browser

//V8 JavaScript Engine (from Google Chrome) C++ bindings for system operations

//Middleware is a function that runs between the request and the response.

