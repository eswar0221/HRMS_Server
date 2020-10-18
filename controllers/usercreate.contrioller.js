const mongoose = require('mongoose');

const Usersc = mongoose.model('Usersc');

module.exports.userregi = (req, res, next) => {
    console.log("usersc reg",req.body);
    
    var usersc = new Usersc();
    usersc.firstname = req.body.firstname;
    usersc.lastname = req.body.lastname;
    usersc.company_name = req.body.company_name;
    usersc.password = req.body.password;
    usersc.cpassword =req.body.cpassword;
    usersc.phone =req.body.phone;
    usersc.Employeeid =req.body.Employeeid;
    usersc.email =req.body.email; 
    usersc.role =req.body.role;
    // usersc.Description = req.body.Description;

    usersc.eread =req.body.eread;
    usersc.ewrite =req.body.ewrite;
    usersc.ecreate =req.body.ecreate;
    usersc.edelete =req.body.edelete;

    usersc.hread =req.body.hread;
    usersc.hwrite =req.body.hwrite;
    usersc.hcreate =req.body.hcreate;
    usersc.hdelete =req.body.hdelete;

    usersc.lrread =req.body.lrread;
    usersc.lrwrite =req.body.lrwrite;
    usersc.lrcreate =req.body.lrcreate;
    usersc.lrdelete =req.body.lrdelete;

    usersc.evread =req.body.evread;
    usersc.evwrite =req.body.evwrite;
    usersc.evcreate =req.body.evcreate;
    usersc.evdelete =req.body.evdelete;
 

    usersc.date = new Date()

    usersc.save((err, doc) => {
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
module.exports.updateuser=(req, res) => {

    // req.body.file=req.file.url;
   
    console.log("usersc Update",req.body)
    let id=req.body.Employeeid
    console.log("emp id is ",id);
    
    Usersc.update({"Employeeid":id},{$set:{ 

        "firstname": req.body.firstname,
        "password" : req.body.password,
        "Employeeid" : req.body.Employeeid,
        "phone"    : req.body.phone,
        "lastname" : req.body.lastname,
        "cpassword": req.body.cpassword,
        "role" :req.body.role,
        "company_name": req.body.company_name,
        "email"    : req.body.email,

        "eread"    : req.body.eread,
        "ewrite"   : req.body.ewrite,
        "ecreate"  : req.body.ecreate,
        "edelete"  : req.body.edelete,
        
        "hread"    : req.body.hread,
        "hwrite"   : req.body.hwrite,
        "hcreate"  : req.body.hcreate,
        "hdelete"  : req.body.hdelete,

        "lrread"    : req.body.lrread,
        "lrwrite"   : req.body.lrwrite,
        "lrcreate"  : req.body.lrcreate,
        "lrdelete"  : req.body.lrdelete,

        "evread"    : req.body.evread,
        "evwrite"   : req.body.evwrite,
        "evcreate"  : req.body.evcreate,
        "evdelete"  : req.body.evdelete,

     

     
       

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
    // usersc.file=req.body.file

    // var project=[{
        
    // }]
    // usersc.project=project  

    // var tasks=[{
      

    // }]
    // usersc.tasks=tasks 


    // var chat=[{
      
    // }]
    // usersc.chat=chat 


    // var estimates=[{
       
    // }]
    // usersc.estimates=estimates 


    // var invoices=[{
       
    // }]
    // usersc.invoices=invoices 




    // var timing_sheets=[{
      
    // }]
    // usersc.timing_sheets=timing_sheets 



 
    // req.body.file=req.file.url;
    // usersc.file=req.body.file


 

    module.exports.deluserid=(req, res) => {
        console.log("clientid del",req.body)
        
        let Employeeid = req.body.Employeeid;
        console.log("clientid!!!!!!!!!!! id",Employeeid);
        
        Usersc.deleteOne({"Employeeid":Employeeid},function(err,data) {                   
            if (err) {
                return console.error(err)
            }
            else{
                res.send(data)
            }
        })
    }
    

module.exports.getuserid=(req, res) => {
 
    console.log(req.body)
    let Employeeid=req.body.Employeeid
    Usersc.find({"Employeeid":Employeeid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
module.exports.getuser=(req, res) => {
    Usersc.find(function(err,data) {                   
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


