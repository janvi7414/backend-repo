const express = require('express')
const router = express.Router();
// importing model
const userModel = require('../models/userModel')

//CRUD operations

//Create
router.post('/user', async (req, res) => {
    try{
        const {name, age, weight} = req.body;
        const newUser = new userModel({name, age, weight});
        await newUser.save();

        //if saved successfully

        res.status(200).json({
            success: true,
            user: newUser
        })

    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})



//Read
router.get('/user', async (req, res) =>{
    try{
        //listing all the documents i.e. users out of db
        const users = await userModel.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(
            {
                success: false,
                message: err.message
            }
        )
    }
})

//



module.exports = router;