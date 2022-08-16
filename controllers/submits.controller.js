/**@format */
const express = require('express');
const models = require('../models/submits.model');
const db = require('../config/db.js')
const router = express.Router();

router.get('/',GetSubmits);
router.post('/add',AddSubmits);

const GetSubmits = async (req, res, next) => {
    await db.models.Submit.findAll();
    res.status(200).json({
        message: "ok",
        data: GetSubmits,
    });

};
module.exports = router
const AddSubmits = (req, res, next) => {

    db.models.Submit.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        village: req.body.village,
        district: req.body.distric,
        province: req.body.province,
        phone: req.body.phone,
        bil_number: req.body.bil_number,
        bil_price: req.body.bil_price,
        period: req.body.period,
        purchase_date: req.body.purchase_date,
        user_id: req.body.user_id,
        
 


    });
    return res.status(200).json({
        status: 200,
        message: "ok"
    })




}
