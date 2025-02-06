const express= require("express");
const dotenv = require("dotenv").config(); 
const app = express();
const port = process.env.PORT || 3001 ;


const connectiondb = require("./config/dbConnection.js");
//Basic CRUD
connectiondb();
app.use(express.json());
app.use("/api/contacts",require("./routes/routesContacts.js"));
app.use("/api/users",require("./routes/routesUsers.js"));


app.listen(port, ()=> {
    console.log(`Server listening at Port ${port}`);
});