/**@format */

const models = require('../models/user');
const migrate = require('../migrations/20220810092211-create-user')
const GetUsers = async (req, res, next) => {
    await models.User.findAll();
    res.status(200).json({
        message: "ok",
        data: GetUsers,
    });

};

const AddUsers = (req, res, next) => {
    if (req.body.user_name) {
        
        models.User.create({
            user_name: req.body.user_name,
            
        }) &&
        migrate.tbgenerate
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
