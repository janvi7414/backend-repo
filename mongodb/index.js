const express = require('express')
const app = express()
const port = 3000
import connectDb from './db';

app.use(express.json())

//connect to database
connectDb();

app.get('/',(req, res) => {
    res.send("get request received...");
})


app.listen(port,()=>{
    console.log("listening....");
})

/*mongoose is a library in between backend app and mongodb 
    it helps to convert object in backend to store it into document in mongodb
    
    schema: blueprint of a document inside mongodb
    
    model: this is made using schema and this helps to perform crud operations on db this is like a toolbox  

    
- npm install mongoose
- npm install dotenv

.env file is used to store confidential data, url etc
    
    */