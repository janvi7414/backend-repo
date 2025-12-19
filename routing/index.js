const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Get request sent')
})
app.post('/items', (req, res) => {
  res.send('Post request sent')
})
app.put('/items/:id', (req, res) => {
  res.send('Put request sent to update')
})
app.delete('/items/:id', (req, res) => {
  res.send('Delete request sent')
})

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

