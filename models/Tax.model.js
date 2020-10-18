const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var TaxSchema = new mongoose.Schema({
    Tax_Name: {
        type: String,
      
    },
    Tax_Percentage: {
        type: String,
        
    },
    Status:{
        type:String,
    },
    date:{
        type:String,
    }
  
});



mongoose.model('Tax', TaxSchema);