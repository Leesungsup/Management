const mongoose = require('mongoose');
const { Schema } = require('mongoose');
//const bcrypt = require('bcrypt');
const saltRounds = 10;
//const jwt = require('jsonwebtoken');
//const moment = require("moment");

const customerSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    birthday: {
        type:String,
        maxlength:50
    },
    gender: {
        type:String,
        maxlength: 50
    },
    job : {
        type:String,
        maxlength: 50
    },
    image: String,
})


const Customer = mongoose.model('Customer', customerSchema);


module.exports = { Customer }