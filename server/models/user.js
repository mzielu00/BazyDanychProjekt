const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        password: String,
        sets: [{ set_id: Number }],
    })
);

module.exports = User;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
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

exports.signin = (req, res) => {
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

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400, // 24 hours
        });

        var authorities = [];

        for (let i = 0; i < user.roles.length; i++) {
            authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        }
        res.status(200).send({
            id: user._id,
            username: user.username,
            sets: user.sets,
            accessToken: token,
        });
    });
};
