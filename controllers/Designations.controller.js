

const mongoose = require('mongoose');

const Designations = mongoose.model('Designations');

module.exports.RegDesignations = (req, res, next) => {
    console.log(req.body);
    
    var designations = new Designations();
    designations.Designation_Name = req.body.Designation_Name;
    designations.Departments = req.body.Departments;
 
    // designations.status = "open";
    designations.date = new Date()

  
    // req.body.file=req.file.url;
    // designations.file=req.body.file


    designations.save((err, doc) => {
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

module.exports.getDesignationsdata=(req, res) => {
    Designations.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getDesignationsno=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Departments
    Designations.find({"Departments":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delDesignations=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.Departments
    console.log("tic!!!!!!!!!!! id",Tic);
    
    Designations.deleteOne({"Departments":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}






module.exports.updateDesignations=(req, res) => {
   
    console.log(req.body)
    // req.body.file=req.file.url;

    let Ticke=req.body.Departments
    Designations.update({"Departments":Ticke},{$set:{ 

        "Designation_Name": req.body.Designation_Name,
        "Departments": req.body.Departments,
     

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


