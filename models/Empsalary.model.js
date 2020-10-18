const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Emp_salarySchema = new mongoose.Schema({


       // employee_id
    // Basic
    // DA HRA  Conveyance  
    // Allowance
    
    // Medical_Allowance   Earnings_Others  Net_Salary  TDS  ESI  PF  Leave   Prof_Tax Labour_Welfare Fund  Loan Deductions_Others
    employeeid: {
        type: String,
      
    },
    salID: {
        type: String,
      
    },
    Basic: {
        type: Number,
        
    },
    DA: {
        type: Number,
       
    },
    HRA: {
        type: Number,
        
    },
    Conveyance:{
        type: Number,
    },

    Allowance: {
        type: Number,
    },
    Medical_Allowance: {
        type: Number,
        
    },
    Earnings_Others:{
        type: Number,
    },

    Net_Salary: {
        type: Number,
        
    },
    TDS:{
        type: Number,
    },
    ESI:{
        type: Number,
    },
    PF:{
        type: Number,
    },
    Leave:{
        type: Number,
    },
    Prof_Tax:{
        type: Number,
        
    },
    Labour_Welfare:{
        type: Number,
    },
    Fund:{
        type: Number,
    },
    Loan:{
        type: Number,
    },
    Deductions_Others:{
        type: Number,
    },

    firstname:{
        type:String,
    },

    email:{
        type:String,
    },
    Joining_Date:{
        type:String,
    },
    designation:{
        type:String,
    },
    Total_Deductions:{
        type:String,
    },
       Total_Earnings:{
           type:String
       },
       PAYSLIP_ID:{
           type:String
       }

});




mongoose.model('Emp_salary', Emp_salarySchema);