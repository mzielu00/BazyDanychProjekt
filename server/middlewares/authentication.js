const User = require("../models/user");
const jwt = require("jsonwebtoken");

checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!",
            });
            return;
        }
    });
};

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = {
    checkDuplicateUsername,
    verifyToken,
};
