const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var assetsSchema = new mongoose.Schema({
    AssetName: {
        type: String,
       
    },
    
    PurchaseDate: {
        type: String,
    },
    
    
    Manufacturer: {
        type: String,
      
    },
    SerialNumber: {
        type: String,
       
    },
    Condition:{
        type: String,
       
    },

    Value: {
        type: String,
     
        
    },
    Status: {
        type: String,
      
        
    },
    Assetid: {
        type: String,
      
        
    },
    WarrantyEnd: {
        type: String,
      
        
    },
    Model: {
        type: String,
    
        
    },
    Supplier: {
        type: String,
     
    },
    Warranty: {
        type: String,
        // required: 'Email can\'t be empty',
        
    },
   
    Asset_User:{
        type:String,
        },
        Description:{
            type:String,
        },
        date:{
            type:String
        }
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



mongoose.model('Assets', assetsSchema);