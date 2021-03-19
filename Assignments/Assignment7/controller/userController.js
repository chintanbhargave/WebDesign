const { response } = require('express')
const User = require('../model/user')

//update an user by its userId
const update = (req, res, next) => {
    let userId = req.body.userId

    let updatedData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    User.findByIdAndUpdate(userId, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'UserUpdated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!!'
            })
        })
}

//delete an user
const destroy = (req, res, next) => {
    let userId = req.body.userId
    password: req.body.password

    User.findByIdAndRemove(userId)
        .then(() => {
            res.json({
                message: 'User deleted successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}

module.exports = {
    update, destroy
}