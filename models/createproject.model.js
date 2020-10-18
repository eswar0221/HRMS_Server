const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var createprojectSchema = new mongoose.Schema({
    projectname: {
        type: String,
      
    },
    startdate: {
        type: String,
        
    },
    projectid: {
        type: String,
       
    },
    status: {
        type: String,
        
    },
    projectleader:{
        type: String,
    },

    addteam: {
 type: String,
    },
    client: {
        type: String,
        
    },
    to:{
        type: String,
    },

    priority: {
        type: String,
        
    },
    file:{
        type: String,
    },
    description:{
        type: String,
    }

});




mongoose.model('CreateProject', createprojectSchema);