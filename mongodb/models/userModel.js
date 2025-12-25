//creating schema and then model using schema

const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    age: {
        type:Number,
        required: true
    },
    weight:{
        type:Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const UserModel = model("User", UserSchema)

module.exports = UserModel

// here "User" is model name which mongoose use and "UserModel" is a js variable we use to talk to the database 