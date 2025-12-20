const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

//this is for post!!!
// inbuild middleware
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("inside post module");
})

//creating a manual middleware
const loggingMiddleware = function (req, res, next) {
    console.log("inside logging mw");
    next();
}

const authenticationMw = function (req, res, next) {
    console.log("inside auth mw");
    // res.send("res sent inside authentication mw");
    next();
}

const verificationMw = function (req, res, next) {
    console.log("inside verification mw");
    next();
}

//calling mw outside the method
// app.use(verificationMw);
// app.use(authenticationMw);
// app.use(loggingMiddleware);

app.get('/mw', loggingMiddleware, authenticationMw, verificationMw, (req, res) => {
    res.send("inside get method");
} )


app.listen(port , () => {
    console.log(`listening to port: ${port} `);
})









/*middleware gets executed in between req sent and res got
 it performs imp tasks like authentication, verification, etc it can also make changes in the response

    The order of calling middleware is imp
    The logic of middleware should be written above it in code
    Inside middleware next is responsible to execute the next middleware if any and if neither then the res or callback func is executed
    when instead of next res is returned it stops the further execution right there 
    Study types of middleware form the official website



to return res as res.body()   app.use(express.json()) is needed

to add data in body while hiting get body->raw 

for console.log output as terminal
 
 */
/*ways of calling middleware funct
    a. ouside the get method app.use(loggingMiddleware);
    
    b. as a parameter inside get method*/


