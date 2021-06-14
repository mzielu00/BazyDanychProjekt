const router = require("express").Router();
const authentication = require("../middlewares");
const { signup, signin } = require("../models/user");

router.post("/signup", authentication.checkDuplicateUsername, signup);

router.post("/signin", signin);
