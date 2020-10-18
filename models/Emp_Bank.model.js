
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Emp_BankSchema = new mongoose.Schema({
    firstname: {
        type: String,
      
    },
    // Employee_Name
    employeeid:{
        type:String,
        index: {unique: true},
        
        },
         
    phone:{
        type:String,
       },
    email:{ 
    type:String
    },
    designation:{
        type:String,
       },
       
 Emp_Bank_no: {
    type: String,  
},
Branch:{
type:String
},

Ifsc_Code: {
    type: String,
  
},

Bank_name: {
    type: String,
  
},
EPS_No: {
    type: String,
  
},
ESI_NO: {
    type: String,
  
},
PAN_NO: {
    type: String,
  
},
PF_NO: {
    type: String,
  
},
UAN_NO: {
    type: String,
  
},
PAN_NO: {
    type: String,
  
},
date:{
    type:String
    },
    ESI_NO:{
        type:String,
    } 
    
});

mongoose.model('Empbank', Emp_BankSchema);


