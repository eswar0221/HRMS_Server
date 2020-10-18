const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var applyjobSchema = new mongoose.Schema({
    Job_Id:{
type:String
    },
    
    Name: {
        type: String,
      
    },
    Email:{
        type: String,
    },

    Message:{
        type: String,
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

// // Custom validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// // Events
// userSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });

mongoose.model('ApplyJob', applyjobSchema);