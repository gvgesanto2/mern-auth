const express = require("express");
const router = express.Router();

// import controller
const { signup } = require("../controllers/auth.controller");

router.get("/signup", signup);

module.exports = router;
