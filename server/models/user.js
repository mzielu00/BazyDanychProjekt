const mongoose = require("mongoose");

//sets stores set IDs
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        password: String,
    })
);

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const authConfig = require("../config/auth.config");

const signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            user.save((err) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                } else {
                    res.send({
                        message: "User was registered successfully!",
                    });
                }
            });
        }
    });
};

const signin = (req, res) => {
    User.findOne({
        username: req.body.username,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!",
            });
        }

        var token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400, // 24 hours
        });

        res.status(200).send({
            id: user._id,
            username: user.username,
            sets: user.sets,
            accessToken: token,
        });
    });
};

module.exports = { User, signup, signin };
