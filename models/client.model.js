const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var clientSchema = new mongoose.Schema({
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
    clientid:{
        type: String,
    },

    email: {
        type: String,
        
    },
    designation:{
        type: String,
    },
    // file: {
    //     type: String,
      
    // },
    date:{
type:String,
    },
  
    //    pread:{
    //         type:Boolean,
    //     },
    //     pwrite:{
    //         type:Boolean,
    //     },
    //     pcreate:{
    //         type:Boolean,
    //     },
    //     pdelete:{
    //         type:Boolean,
    //     },
      
    
   
    //     tread:{
    //         type:Boolean,
    //     },
    //     twrite:{
    //         type:Boolean,
    //     },
    //     tcreate:{
    //         type:Boolean,
    //     },
    //     tdelete:{
    //         type:Boolean,
    //     },
      
   
    
    //     cread:{
    //         type:Boolean,
    //     },
    //     cwrite:{
    //         type:Boolean,
    //     },
    //     ccreate:{
    //         type:Boolean,
    //     },
    //     cdelete:{
    //         type:Boolean,
    //     },
      
    
   
    //     eread:{
    //         type:Boolean,
    //     },
    //     ewrite:{
    //         type:Boolean,
    //     },
    //     ecreate:{
    //         type:Boolean,
    //     },
    //     edelete:{
    //         type:Boolean,
    //     },
    
 
    //     iread:{
    //         type:Boolean,
    //     },
    //     iwrite:{
    //         type:Boolean,
    //     },
    //     icreate:{
    //         type:Boolean,
    //     },
    //     idelete:{
    //         type:Boolean,
    //     },
      
   
    
    //     tsread:{
    //         type:Boolean,
    //     },
    //     tswrite:{
    //         type:Boolean,
    //     },
    //     tscreate:{
    //         type:Boolean,
    //     },
    //     tsdelete:{
    //         type:Boolean,
    //     },
      
   
  
});




mongoose.model('Client', clientSchema);