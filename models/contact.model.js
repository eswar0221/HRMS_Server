const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
      
    },
    designation: {
        type: String,
        
    },
    email: {
        type: String,
       
    },
    employeeid:{
type:String
    },
    Phone: {
        type: String,
        
    },
    status:{
        type: String,
    },

   
    file:{
        type: String,
    },
    date:{
        type:String,
    }
  
});




mongoose.model('Contact', contactSchema);