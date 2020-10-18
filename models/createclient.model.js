const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var createClientSchema = new mongoose.Schema({
    firstname: {
        type: String,
      
    },
    contactperson: {
        type: String,
        
    },
    password: {
        type: String,
       
    },
    clientId: {
        type: String,
        
    },
    phone:{
        type: String,
    },

    lastname: {
        type: String,
    },
    email: {
        type: String,
        
    },
    cpassword:{
        type: String,
    },

    companyname: {
        type: String,
        
    },
   

});




mongoose.model('CreateClient', createClientSchema);