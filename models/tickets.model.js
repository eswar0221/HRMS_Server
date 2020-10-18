const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var createTicketsSchema = new mongoose.Schema({
    TicketSubject: {
        type: String,
      
    },
    // AssignStaff: {
    //     type: String,
        
    // },
    TicketId: {
        type: String,
        index: {unique: true},
        required: 'Ticket Id Should be choose another one',       
    },
    status:{
type:String
    },
    Priority: {
        type: String,
        
    },
    Description:{
        type: String,
    },
email:{
    type:String
}
   ,
    file:{
        type: String,
    },
    date:{
        type:String,
    }
  
});




mongoose.model('CreateTickets', createTicketsSchema);