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
        console.log("success post req");

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
        console.log("success get req");
    }
    catch(err){
        res.status(500).json(
            {
                success: false,
                message: err.message
            }
        )
    }
})

//Update
router.put('/user/:id',async (req, res) => {
    const {id} = req.params;
    const {name, age, weight} = req.body;

    try{

        //finding doc with id
        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            {name, age, weight},
            {new: true}
        );
        //  by default findById.. returns the old doc

        //if no match found
        if(!updatedUser){
            return res.status(404).json({
                message: "User not found"
            })
        }
        //when updated successfully

        res.status(200).json({
            success: true,
            // here "user" is key it could be data, person etc and i set it
            user: updatedUser
        })

    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//Delete
router.delete('/user/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const deletedUser = await userModel.findByIdAndDelete(id);

        if(!deletedUser){
            res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            user: deletedUser
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})



module.exports = router;