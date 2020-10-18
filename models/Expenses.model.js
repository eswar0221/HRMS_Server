const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var ExpensesSchema = new mongoose.Schema({

    //   Item_Name Purchase_Date Amount Status Purchase_From     Purchased_By    Paid_By
    Expensives_ID:{
        type:String,
        index: {unique: true},

    }
,
    Item_Name: {
        type: String,
      
    },
    // Purchase_Date: {
    //     type: String,
        
    // },
    pday: {
        type: String,
        
    },
     pmonth: {
        type: String,
        
    },
     pyear: {
        type: String,
        
    },
    Amount: {
        type: String,
       
    },
    Status:{
type:String
    },
    Purchase_From: {
        type: String,
        
    },
    Purchased_By:{
        type: String,
    },
    email:{
        type:String
    },
    gst:{
        type:String
    },
     total_amount:{
        type:String
    },
    Paid_By: {
        type: String,
        
    },   
    file:{
        type: String,
    },
    date:{
        type:String,
    }
  
});




mongoose.model('Expenses', ExpensesSchema);