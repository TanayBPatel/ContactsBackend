const express = require("express");
const router = express.Router();

const {getUser ,
     postRegister ,
      getCheck,getCurrent} = require("../controllers/controllersUsers.js");
const validateToken = require("../middleware/tokenValidation.js");

router.post("/login",getUser);

router.post("/register",postRegister);

router.get("/check",getCheck);

router.get("/current",validateToken, getCurrent);


module.exports = router;
