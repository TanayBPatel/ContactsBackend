const mongoose = require("mongoose");

// const connectdb = mongoose.connect(process.env.CONNECTION_STRING);
const dotenv= require("dotenv").config();


const connectdb= async ()=> {
    try{
        const  connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Connected at ",connect.connection.host,connect.connection.name);
    }
    catch(err){
        console.log(err);   
        process.exit(1);
    }
};

module.exports = connectdb;