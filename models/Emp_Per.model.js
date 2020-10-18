  // Holidays Tickets  Activities  Events

  const mongoose = require('mongoose');


  var empperSchema = new mongoose.Schema({
    home: {
        type: Boolean   
    } ,
    Holidays: {
          type: Boolean,
      },
      Tickets: {
          type: Boolean,
      },
      Activities: {
          type: Boolean,
      },
      Events: {
          type: Boolean   
      }  
     ,
     Leave_Request:{
        type: Boolean,

     },
     jobs:{
        type: Boolean,
         
     },
  
  });
  mongoose.model('Empper', empperSchema);



























