/**@format */

const models = require('../models/index');

const GetUsers = async (req, res, next) => {
    await models.User.findAll();
    res.status(200).json({
        message: "ok",
        data: GetUsers,
    });

};

const AddUsers = (req, res, next) => {
    if (req.body.user_name,
        req.body.hash_pwd,
        req.body.full_name,
        req.body.role,
        req.body.is_active) {
        models.User.create({
            user_name: req.body.user_name,
            hash_pwd: req.body.hash_pwd,
            full_name: req.body.full_name,
            role: req.body.role,
            is_active: req.body.is_active
        });
        return res.status(200).json({
            status: 200,
            message: "ok"
        })

    } else {
        return res.status(400).json({
            status: 400,
            message: "bad request"
        })
    }
}

const DisableUser = (req, res, next)=>{
    if (req.body.is_active){
        model.User.findOne
    }
}
module.exports = {
    GetUsers,
    AddUsers
}
