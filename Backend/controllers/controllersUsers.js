const User = require("../models/userSchema.js");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv= require("dotenv").config();

const getUser = asyncHandler( async(req,res)=>{

    const {username,email,password}= req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are Mandatory!!");
    }
    const user = await User.findOne({ email: req.body.email });
    

    if(user && bcrypt.compare(password,user.password)){
        const accessToken = jwt.sign({
            user:{
                username:   user.username,
                email : user.email,
                id : user.id
            }
        },
        process.env.ACCESS_TOKEN,
        {
            expiresIn: "30m"
        }
    )
    res.status(200).json( {accessToken} );
    }
    else{
        throw new Error("User Not Registered | Try Register");
    }
});

const postRegister = asyncHandler(async(req,res)=>{
    
    const {username,email,password}= req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are Mandatory!!");
    }
    const userAvailable = await User.findOne({ email: req.body.email });

    if(userAvailable){
        res.status(400);
        throw new Error("User Already Registered");
    }
    const hashedpassword = await bcrypt.hash(password,10);
    console.log("hashed Password", hashedpassword);
    console.log("User Registered Succesfully!!");

    const user= await User.create({
            username,
            email,
            password: hashedpassword
    });
    if(user){
        res.status(200).json({_id: user.username, email: user.email});
    }
    else{
        res.status(400);
        throw new error("User not Valid!!");
    }
});

const getCheck = asyncHandler(async(req,res)=>{
    
        const getAll = await User.find();
        res.status(200).json(getAll);
    
});

//private route
const getCurrent = asyncHandler(async(req,res)=>{
    
    res.status(200).json("success");

});


module.exports = {getUser , postRegister , getCheck , getCurrent};


