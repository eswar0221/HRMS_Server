const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var hrmanSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Full name can\'t be empty',
        index: {unique: true}

    },
  
    dateofjoining: {
        type: String,
        // required: 'Email can\'t be empty',
        
    },
  
    employeeid: {
        type: String,
        required: 'Email can\'t be empty',
        index: {unique: true}

        
    },
    lastname:{
        type: String,
        required: 'Password can\'t be empty',
    },

    company: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
    phone: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        index: {unique: true}
        
    },
    cpassword: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
    Joining_Date:{
type:String,
    },
    designation: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
     
    Birthday:{
        type:String,
            },
            
            Gender: {
                type: String,
                required: 'Email can\'t be empty',
                
            },
            Reporting_Manager:{
                type:String,
            },

    file: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
    // noofleaves: {
    //     type: String,
    //     // required: 'Email can\'t be empty',
        
    // },
    medical_lev:{
        type:String,
    },
    casual_lev:{
        type:String,
    },
    ctc: {
        type: String,
        // required: 'Email can\'t be empty',
        
    },

    // saltSecret: String
});





mongoose.model('Hrman', hrmanSchema);