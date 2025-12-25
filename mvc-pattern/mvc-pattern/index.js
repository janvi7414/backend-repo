require('dotenv').config({path: "./.env"});

const express = require('express')
const app = express()
const connectDB = require('./config/db')


connectDB();


const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
