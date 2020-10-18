const mongoose = require('mongoose');

const CreateClient = mongoose.model('CreateClient');

module.exports.createclient = (req, res, next) => {
    console.log(req.body);
    
    var createclient = new CreateClient();
    createclient.firstname = req.body.firstname;
    createclient.contactperson = req.body.contactperson;
    createclient.password = req.body.password;
    createclient.clientId = req.body.clientId;
    createclient.phone = req.body.phone;
    createclient.lastname = req.body.lastname;
    createclient.email = req.body.email;
    createclient.cpassword = req.body.cpassword;
    createclient.companyname = req.body.companyname;
   
    createclient.save((err, doc) => {
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

module.exports.getprojects=(req, res) => {
    CreateClient.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getprojectsbyid=(req, res) => {
    console.log(req.params);
    
    let id=req.params.clientId
    CreateClient.find({"clientId":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}



module.exports.updateproject=(req, res) => {

    req.body.file=req.file.url;
   
    console.log(req.body)
    let id=req.body.clientId
    CreateClient.update({"clientId":id},{$set:{ 

        "firstname ": req.body.firstname,
        "contactperson ": req.body.contactperson,
       "password":req.body.password,
       "clientId":req.body.clientId,
       "phone": req.body.phone,
       "lastname": req.body.lastname,
       "cpassword": req.body.cpassword,
       "email":req.body.email,
       "companyname": req.body.companyname,
      
       

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


