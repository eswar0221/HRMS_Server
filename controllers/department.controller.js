const mongoose = require('mongoose');

const Department = mongoose.model('Department');

module.exports.regDepartment = (req, res, next) => {
    console.log(req.body);
    
    var department = new Department();
    department.department = req.body.department;
  
    department.date = new Date()

   
 
    // req.body.file=req.file.url;
    // department.file=req.body.file


    department.save((err, doc) => {
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

module.exports.getDepartment=(req, res) => {
    Department.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getDepartmentid=(req, res) => {
 
    console.log(req.body)
    let id=req.body.department
    Department.find({"department":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delDepartment=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.department
    console.log("tic!!!!!!!!!!! id",Tic);
    
    Department.deleteOne({"department":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}






module.exports.updateDepartment=(req, res) => {
   
    console.log("department update",req.body)
    // req.body.file=req.file.url;

     
    let Tic=req.body.department
    console.log("department!!!!!!!!!!! id",Tic);
    
    
    Department.update({"department":Tic},{$set:{ 

        "department": req.body.department,
      

    }},function(err,data) {                            
        if (err) {
            console.log(err);

            return console.error(err)
            
        }
        else{
            res.send(data)
        }
    })


}


