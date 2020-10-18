const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
      
    },

    lastname: {
        type: String,
        
    },

    company_name: {
        type: String,
        
    },
    password: {
        type: String,
       
    },
    cpassword:{
type:String
    },
    phone: {
        type: String,
        
    },
    Employeeid:{
        type: String,
    },

    email: {
        type: String,
        
    },
    role:{
        type: String,
    },
    // file: {
    //     type: String,
      
    // },
    date:{
type:String,
    },

    eread:{
        type:Boolean,
    },
    ewrite:{
        type:Boolean,
    },
    ecreate:{
        type:Boolean,
    },
    edelete:{
        type:Boolean,
    },

       hread:{
            type:Boolean,
        },
        hwrite:{
            type:Boolean,
        },
        hcreate:{
            type:Boolean,
        },
        hdelete:{
            type:Boolean,
        },
      
    
   
        lrread:{
            type:Boolean,
        },
        lrwrite:{
            type:Boolean,
        },
        lrcreate:{
            type:Boolean,
        },
        lrdelete:{
            type:Boolean,
        },
      
   
    
        evread:{
            type:Boolean,
        },
        evwrite:{
            type:Boolean,
        },
        evcreate:{
            type:Boolean,
        },
        evdelete:{
            type:Boolean,
        },
      
    
   

   
  
});




mongoose.model('Usersc', usersSchema);