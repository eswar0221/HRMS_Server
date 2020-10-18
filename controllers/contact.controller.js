const mongoose = require('mongoose');

const Contact = mongoose.model('Contact');

module.exports.Regcontact = (req, res, next) => {
    console.log(req.body);
    
    var contact = new Contact();
    contact.firstname = req.body.firstname;
    contact.designation = req.body.designation;
    contact.email = req.body.email;
    contact.employeeid = req.body.employeeid;
    contact.Phone = req.body.Phone;
    contact.status = req.body.status;
    contact.date = new Date()
    req.body.file=req.file.url;
    contact.file=req.body.file
    contact.save((err, doc) => {
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
module.exports.getcontactdata=(req, res) => {
    Contact.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getcontactno=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Phone
    Contact.find({"Phone":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delphone=(req, res) => {
    console.log("del",req.body)
    
    let Phone=req.body.Phone
    console.log("tic!!!!!!!!!!! id",Phone);
    
    Contact.deleteOne({"Phone":Phone},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.updatecontact=(req, res) => {
   
    console.log("update contact",req.body)
    req.body.file=req.file.url;

    let Phone=req.body.Phone
    console.log("fdf phon let",Phone);
    
    Contact.update({"Phone":Phone},{$set:{ 

       
       "firstname":req.body.firstname,
       "designation": req.body.designation,
       "email": req.body.email,
       "employeeid": req.body.employeeid,
       "Phone": req.body.Phone,
       "status":req.body.status,     
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


