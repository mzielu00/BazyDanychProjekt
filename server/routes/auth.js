const router = require("express").Router();
const { checkDuplicateUsername } = require("../middlewares/authentication");
const { signup, signin } = require("../models/user");

router.get("/", (req, res) => {
    console.log("auth works");
});

router.post(
    "/signup",
    (req, res, next) => {
        console.log(req.body.username);
        next();
    },
    checkDuplicateUsername,
    signup
);

router.post("/signin", signin);

module.exports = router;
