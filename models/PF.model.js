// Employee_Name
// Empl_Share_Amo
// Empl_Share_Per
// Provident_Fund_Type
// Organi_Share_amo
// Organi_Share_per
// Description
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var PFSchema = new mongoose.Schema({
    Employee_Name: {
        type: String,
      
    },
    Empl_Share_Amo:{
type:String
    },
    Empl_Share_Per:{
     type:String,
 },
 Provident_Fund_Type: {
    type: String,
  
},
Organi_Share_amo:{
type:String
},
Organi_Share_per: {
    type: String,
  
},
Description:{
type:String
},

date:{
 type:String,
},


});



mongoose.model('Pf', PFSchema);


