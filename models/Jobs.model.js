const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var jobSchema = new mongoose.Schema({

    Job_Id:{
        type:String,
    },

    Job_Title: {
        type: String,
      
    },
    Job_Location: {
        type: String,
        
    },
    Experience: {
        type: String,
        
    },
    Salary_From: {
        type: String,
    },
    Job_Type: {
        type: String,
        
    },
    Start_Date:{
        type: String,
    },

    Department: {
        type: String,
        
    },
    No_of_Vacancies: {
        type: String,
        
    },
    Age: {
        type: String,
        
    },
    Salary_To: {
        type: String,
        
    },
    Expired_Date: {
        type: String,
        
    },
    Status: {
        type: String,
        
    },
    Description: {
        type: String,
        
    },

    // saltSecret: String
});


// regSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });



mongoose.model('Jobs', jobSchema);