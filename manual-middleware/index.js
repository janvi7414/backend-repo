const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

//importing the file router

const myroute = require('./routes/item');

//mounting the myroute
app.use('/xyz', myroute);

app.listen(port , () => {
    console.log("listening");
})


