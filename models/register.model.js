const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var regSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Full name can\'t be empty',
        index: {unique: true}

    },
    // username: {
    //     type: String,
    //     required: 'Email can\'t be empty',
        
    // },
    dateofjoining: {
        type: String,
        // required: 'Email can\'t be empty',
        
    },
    // password: {
    //     type: String,
    //     required: 'Password can\'t be empty',
    //     minlength : [4,'Password must be atleast 4 character long']
    // },
    employeeid: {
        type: String,
        required: 'employeeid can\'t be empty',
        index: {unique: true}

        
    },
    lastname:{
        type: String,
        required: 'lastname can\'t be empty',
    },

    company: {
        type: String,
        required: 'company can\'t be empty',
        
    },
    phone: {
        type: String,
        required: 'phone can\'t be empty',
        
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        index: {unique: true}

        
    },
    cpassword: {
        type: String,
        required: 'cpassword can\'t be empty',
        
    },
    Joining_Date:{
type:String,
    },
    designation: {
        type: String,
        required: 'designation can\'t be empty',
        
    },
     
    Birthday:{
        type:String,
            },

            Gender: {
                type: String,
                required: 'Gender can\'t be empty',
                
            },

            ctc: {
                type: String,
                required: 'ctc can\'t be empty',
                
            },

    file: {
        type: String,
        required: 'file can\'t be empty',
        
    },
    // noofleaves: {
    //     type: Number,
    //     // required: 'Email can\'t be empty',
        
    // },
    medical_lev:{
        type:String,
    },
    casual_lev:{
        type:String,
    },
    Reporting_Manager:{
        type:String
    },

    // saltSecret: String
});




mongoose.model('Reg', regSchema);