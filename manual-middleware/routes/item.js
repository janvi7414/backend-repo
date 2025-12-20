const express = require('express')
const router = express.Router()

router.use(express.json());

//creating mw

const authMw = function (req, res, next){
    console.log("inside authMw");

    //creating dummy user
    req.user = { 
        userId: 1,
        role: "student",

    }

    if(req.user){
        
        next();
    }else{
        console.log("failure");
        res.json(
            {
                success: false,
                message: "not a valid user",
            }
        )
    }
}

const isStuMw = function(req, res, next){
    console.log("I am inside student sec");
    if(req.user.role === "student")
    {
        next();
    }else{
        console.log("failure");
        res.json(
            {
                success: false,
                message: "access denied for other than students",
            }
        )
    }
}

const isAdminMw = function(req, res, next){
    console.log("I am inside admin sec");
    if(req.user.role === "admin")
    {
        next();
    }else{
        console.log("failure");
        res.json(
            {
                success: false,
                message: "access denied for other than admins",
            }
        )
    }
}

//routes
router.get('/student', authMw, isStuMw, (req, res) =>{
    console.log("success log for student");
    res.send("success for student");
})

router.get('/admin', authMw, isAdminMw, (req, res) =>{
    console.log("success log for admin");
    res.send("success for admin");
})



module.exports = router

/* we have set the role as student
    for student 
        /xyz/student --> allowed
        and not allowed for rest
    for admin 
        /xyz/admin --> allowed
        and not allowed for rest
*/