/**@format */

const models = require('../models/index'); 
exports.index = async (req, res, next) => {
    const GetUsers = await models.User.findAll();
    res.status(200).json({
        message: "ok",
        data: GetUsers,
    });

    const AddUsers = await models.User.create({
        user_name,
        full_name,
        hash_pwd: encryptPassword,
        role,
        is_active
    });
    res.status(200).json
   
};

