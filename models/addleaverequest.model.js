const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var leaveSchema = new mongoose.Schema({
    employeename: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    employeeid:{
        type:String,

        
    },
    tday:  {
        type: String,
        required: 'tday can\'t be empty',
        
    },
tmonth:  {
    type: String,
    required: 'tmonth can\'t be empty',
    
},
tyear: {
        type: String,
        required: 'tyear can\'t be empty',
        
    },
    leavetype: {
        type: String,
        required: 'leavetype can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    designation: {
        type: String,
        required: 'designation can\'t be empty',
        
    },
    leavereason:{
        type: String,
        required: 'leavereason can\'t be empty',
    },

    fday: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
fmonth:  {
    type: String,
    required: 'fday can\'t be empty',
    
},
fyear: {
    type: String,
    required: 'fyear can\'t be empty',
    
},
// leav_ap_mon:  {
//     type: String,
//     required: 'Email can\'t be empty',
    
// },
// leav_ap_year:  {
//         type: String,
//         required: 'Email can\'t be empty',
        
//     },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
     
    // noofleaves: {
    //     type: Number,
    //     required: 'Email can\'t be empty',
        
    // },
    
    medical_lev:{
        type:String,
        required: 'Remaining medical_lev can\'t be empty',

    },
    casual_lev:{
        type:String,
        required: 'Remaining casual_lev can\'t be empty',

    },
    total_casual_leaves:{
        type:String,
        required: 'total_casual_leaves can\'t be empty',

    },
    total_medi_leaves:{
        type:String,
        required: 'total_medi_leaves can\'t be empty',

    },
    
    // totalleaves: {
    //     type: Number,
    //     required: 'totalleaves can\'t be empty',
        
    // }, 
    leaveid:{
        type:String,
        index: {unique: true},
        required: 'Leave Id Should be choose another one',       


    },
    status: {
        type: String,
        required: 'status can\'t be empty',
        
    }, 
    No_Of_Days_Leave_Apply: {
        type: Number,
        required: 'No_Of_Days_Leave_Apply can\'t be empty',
        
    },
    date:{
        type:String,

    },
    Reporting_Manager:{
        type:String,
        required: 'Reporting_Manager can\'t be empty',


    },
    losofpay:{
        // type:String,
        type: Number,

        required: 'losofpay can\'t be empty',

    },
});




mongoose.model('Leave', leaveSchema);