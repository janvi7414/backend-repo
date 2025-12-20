const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("inside post module");
})

app.listen(port , () => {
    console.log("listening");
})

/*middleware gets executed in between req sent and res got
 it performs imp tasks like authentication, verification, etc it can also make changes in the response

    The order of calling middleware is imp
    The logic of middleware should be written above it in code
    Inside middleware next is responsible to execute the next middleware if any and if neither then the res or callback func is executed
    when instead of next res is returned it stops the further execution right there 
    Study types of middleware form the official website



to return res as res.body()   app.use(express.json()) is needed  and this is inbuilt middleware

to add data in body while hiting get body->raw 

for console.log output as terminal
 
 */


