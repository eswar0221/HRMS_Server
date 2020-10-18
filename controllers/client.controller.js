const mongoose = require('mongoose');

const Client = mongoose.model('Client');

module.exports.clientreg = (req, res, next) => {
    console.log("clent reg",req.body);
    
    var client = new Client();
    client.firstname = req.body.firstname;
    client.lastname = req.body.lastname;
    client.company_name = req.body.company_name;
    client.password = req.body.password;
    client.cpassword =req.body.cpassword;
    client.phone =req.body.phone;
    client.clientid =req.body.clientid;
    client.email =req.body.email; 
    client.designation =req.body.designation;
    client.Description = req.body.Description;
    // client.pread =req.body.pread;
    // client.pwrite =req.body.pwrite;
    // client.pcreate =req.body.pcreate;
    // client.pdelete =req.body.pdelete;
    // client.tread =req.body.tread;
    // client.twrite =req.body.twrite;
    // client.tcreate =req.body.tcreate;
    // client.tdelete =req.body.tdelete;
    // client.cread =req.body.cread;
    // client.cwrite =req.body.cwrite;
    // client.ccreate =req.body.ccreate;
    // client.cdelete =req.body.cdelete;
    // client.eread =req.body.eread;
    // client.ewrite =req.body.ewrite;
    // client.ecreate =req.body.ecreate;
    // client.edelete =req.body.edelete;
    // client.iread=req.body.iread;
    // client.iwrite=req.body.iwrite;
    // client.icreate=req.body.icreate;
    // client.idelete=req.body.idelete;
    // client.tsread =req.body.tsread;
    // client.tswrite =req.body.tswrite;
    // client.tscreate =req.body.tscreate;
    // client.tsdelete =req.body.tsdelete;
    client.date = new Date()

    client.save((err, doc) => {
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
module.exports.updateclent=(req, res) => {

    // req.body.file=req.file.url;
   
    console.log("client Update",req.body)
    let id=req.body.clientid
    console.log(id);
    
    Client.update({"clientid":id},{$set:{ 

        "firstname": req.body.firstname,
        "password" : req.body.password,
        "clientid" : req.body.clientid,
        "phone"    : req.body.phone,
        "lastname" : req.body.lastname,
        "cpassword": req.body.cpassword,
        "designation" :req.body.designation,
        "company_name": req.body.company_name,
        "email"    : req.body.email,
        // "pread"    : req.body.pread,
        // "pwrite"   : req.body.pwrite,
        // "pcreate"  : req.body.pcreate,
        // "pdelete"  : req.body.pdelete,
        // "tread"    : req.body.tread,
        // "twrite"   : req.body.twrite,
        // "tcreate"  : req.body.tcreate,
        // "tdelete"  : req.body.tdelete,

        // "cread"    : req.body.cread,
        // "cwrite"   : req.body.cwrite,
        // "ccreate"  : req.body.ccreate,
        // "cdelete"  : req.body.cdelete,

        // "eread"    : req.body.eread,
        // "ewrite"   : req.body.ewrite,
        // "ecreate"  : req.body.ecreate,
        // "edelete"  : req.body.edelete,

        // "iread"    : req.body.iread,
        // "iwrite"   : req.body.iwrite,
        // "icreate"  : req.body.icreate,
        // "idelete"  : req.body.idelete,

        // "tsread"   : req.body.tsread,
        // "tswrite"  : req.body.tswrite,
        // "tscreate" : req.body.tscreate,
        // "tsdelete" : req.body.tsdelete,
       

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}








    // req.body.file=req.file.url;
    // client.file=req.body.file

    // var project=[{
        
    // }]
    // client.project=project  

    // var tasks=[{
      

    // }]
    // client.tasks=tasks 


    // var chat=[{
      
    // }]
    // client.chat=chat 


    // var estimates=[{
       
    // }]
    // client.estimates=estimates 


    // var invoices=[{
       
    // }]
    // client.invoices=invoices 




    // var timing_sheets=[{
      
    // }]
    // client.timing_sheets=timing_sheets 



 
    // req.body.file=req.file.url;
    // client.file=req.body.file


 

    module.exports.delclientid=(req, res) => {
        console.log("clientid del",req.body)
        
        let clientid = req.body.clientid;
        console.log("clientid!!!!!!!!!!! id",clientid);
        
        Client.deleteOne({"clientid":clientid},function(err,data) {                   
            if (err) {
                return console.error(err)
            }
            else{
                res.send(data)
            }
        })
    }
    

module.exports.getClientId=(req, res) => {
 
    console.log(req.body)
    let clientid=req.body.clientid
    Client.find({"clientid":clientid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
module.exports.getclients=(req, res) => {
    Client.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}




module.exports.updateticket=(req, res) => {
   
    console.log(req.body)
    req.body.file=req.file.url;

    let TicketId=req.body.TicketId
    CreateTickets.update({"TicketId":TicketId},{$set:{ 

        "TicketId ": req.body.TicketId,
        "TicketSubject ": req.body.TicketSubject,
       "AssignStaff":req.body.AssignStaff,
       "status":req.body.status,
       "Priority": req.body.Priority,
       "Description": req.body.Description,
     
       "file": req.body.file,
       

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


