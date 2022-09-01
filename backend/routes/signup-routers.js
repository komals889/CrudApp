

const express = require("express");
const { signupUser } = require("../controller/signup-controller");

const router = express.Router()
router.route("/user").post(signupUser)

module.exports = router;