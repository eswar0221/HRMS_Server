const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var manregisterSchema = new mongoose.Schema({
  
    username: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
  
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
  
    email: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
    cpassword: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
  
   

    saltSecret: String
});


manregisterSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});



mongoose.model('Manregister', manregisterSchema);