const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var SalaryCodeSchema = new mongoose.Schema({
   
    code:{
        type: String,
    },
    descr:{
        type: String,
    },
    bsalary: {
        type: String,
    },
    line:[{
        frequency: {
            type: String,
        },
        ptype:         {
            type: String,
        },
        payval: {
            type: String,
        },
        amount: {
            type: String,
        },
    }],
    gamount: {
        type: String,
    },



 date:{
     type:String,
 },




});


mongoose.model('Salary', SalaryCodeSchema);