const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var designationsSchema = new mongoose.Schema({
    Designation_Name: {
        type: String,
      
    },
    Departments: {
        type: String,
        
    },
  
    date:{
        type:String,
    }
  
});




mongoose.model('Designations', designationsSchema);