const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load env configuration
dotenv.config();

const connectDb = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected`);
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;

