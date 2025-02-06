const express = require("express");
const router = express.Router();

const {getAContact ,
     getContact ,
      postContact,
       putContact ,
        deleteContact} = require("../controllers/controllersContacts.js");
const validateToken = require("../middleware/tokenValidation.js");


router.use(validateToken);

router.route("/").get(getContact);

router.route("/:id").get(getAContact);

router.route("/").post(postContact);

router.route("/:id").put(putContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
