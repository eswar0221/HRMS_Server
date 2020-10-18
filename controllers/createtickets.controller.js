const mongoose = require('mongoose');

const CreateTickets = mongoose.model('CreateTickets');

module.exports.createTickets = (req, res, next) => {
    console.log(req.body);
    
    var createtickets = new CreateTickets();
    createtickets.TicketSubject = req.body.TicketSubject;
    // createtickets.AssignStaff = req.body.AssignStaff;
    createtickets.TicketId = req.body.TicketId;
    createtickets.email = req.body.email;

    createtickets.Priority = req.body.Priority;
    createtickets.status = "open";
    createtickets.date = new Date()

    createtickets.Description = req.body.Description;
 
    req.body.file=req.file.url;
    createtickets.file=req.body.file


    createtickets.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.gettickets=(req, res) => {
    CreateTickets.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getticketid=(req, res) => {
 
    console.log(req.body)
    let id=req.body.TicketId
    CreateTickets.find({"TicketId":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.getTicketemial=(req, res) => {
 
    console.log(req.body)
    let id=req.body.email
    CreateTickets.find({"email":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
module.exports.delticketid=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.TicketId
    console.log("tic!!!!!!!!!!! id",Tic);
    
    CreateTickets.deleteOne({"TicketId":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}






module.exports.updateticket=(req, res) => {
   
    console.log("id edittic",req.body)
    // req.body.file=req.file.url;

    let dfg=req.body.TicketId
    console.log("id",dfg);
    
    CreateTickets.update({"TicketId":dfg},{$set:{ 

        "TicketId ": req.body.TicketId,
        "TicketSubject ": req.body.TicketSubject,
    //    "AssignStaff":req.body.AssignStaff,
       "status":req.body.status,
       "email": req.body.email,

       "Priority": req.body.Priority,
       "Description": req.body.Description,
     
    //    "file": req.body.file,
       

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


