const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var tasksSchema = new mongoose.Schema({
    Task_Name: {
        type: String,
      
    },
    Description: {
        type: String,
        
    },
    Employeeid: {
        type: String,
       
    },
    Employee_Name:{
type:String
    },
    email:{
        type:String
            },
    date:{
        type:String,
    },  status:{
        type:String,
    }
  
  
});




mongoose.model('Tasks', tasksSchema);