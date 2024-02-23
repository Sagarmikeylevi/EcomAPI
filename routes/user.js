const express = require("express");
const router = express.Router();

const { register, createSession } = require("../controllers/userController");

router.post("/register", register);
router.post("/login", createSession);

module.exports = router;
