const express = require("express");
const router = express.Router();

module.exports = function (db) {
    const User = require("../models/user")(db)
    //Adding a user

    router.post('/user', (req, res, next) => {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        });

        newUser.save((error) => {
            if (error) {
                res.json({ msg: `${error}` })
            }
            else {
                res.json({ msg: "user added successfully" })
            }
        })
    });

    router.get('/users', function (req, res, next) {

        User.find(function (err, users) {
            res.json(users);
        });
    });
    router.get('/user/:username', function (req, res, next) {

        User.findOne({ username: req.params.username }, function (err, users) {
            res.json(users);
        });
    });

    router.delete('/user/:username', (req, res, next) => {
        User.deleteOne({ username: req.params.username }, function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        });
    });

    return router
};