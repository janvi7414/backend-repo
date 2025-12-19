const express = require('express')
const app = express()
const port = 3000

//import item's router file
const item = require('./routes/item');
const bird = require('./routes/birds');
//load into application
app.use('/api',item);
app.use('/filler',bird);

// /api/ -> item home page
// /api/items -> item post request
// /api/items/id -> put/delete request

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// here when a single project contains alot routes this approach is used here all the routes are listed inside a single file which is imported in index.js


