const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var addtimingSchema = new mongoose.Schema({
    first_Name: {
        type: String,
      
    },
    Last_Name: {
        type: String,
        
    },
    Designationt: {
        type: String,
       
    },
    Project:{
type:String
    },
    Deadline: {
        type: String,
        
    },
    Total_Hours:{
        type: String,
    },

   
    Remaining_Hours:{
        type: String,
    },
    today_Date:{
        type:String,
    },
    Hours:{
        type:String,
    },
    Description:{
        type:String,
    },
  
});




mongoose.model('Addtiming', addtimingSchema);