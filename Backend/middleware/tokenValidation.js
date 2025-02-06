const jwt =require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const dotenv= require("dotenv").config();

const validateToken = asyncHandler(async (req,res,next)=>{
    let token;
    let authHeaders = req.headers.Authorization || req.headers.authorization;
    if(authHeaders && authHeaders.startsWith("Bearer")){
        token = authHeaders.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not Authorized! ");
            }
            req.user = decoded.user;
            next();
            if(!token){
                res.status(400).send("User not Authorized");
            }
        });
    }
});

module.exports = validateToken;