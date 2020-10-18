const mongoose = require('mongoose');

const Salary = mongoose.model('Salary');

module.exports.regdsalary = (req, res, next) => {
    console.log(req.body);
    
    var salary = new Salary();
    salary.code = req.body.code;
    salary.descr = req.body.descr;
    salary.bsalary = req.body.bsalary;
    salary.gamount = req.body.gamount;
    var line=[{     
        frequency:req.body.frequency,        
        ptype:req.body.ptype,
        payval:req.body.payval,
        amount:req.body.amount,          
            
        }]
        salary.line=line  

    salary.date = new Date()

    salary.save((err, doc) => {
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

module.exports.getdsalary=(req, res) => {
    Salary.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


// module.exports.getdsalaryid=(req, res) => {
 
//     console.log(req.body)
//     let id=req.body.salary
//     Salary.find({"salary":id},function(err,data) {                   
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }


// module.exports.delsalary=(req, res) => {
//     console.log("del",req.body)
    
//     let Tic=req.body.salary
//     console.log("tic!!!!!!!!!!! id",Tic);
    
//     Salary.deleteOne({"salary":Tic},function(err,data) {                   
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }






// module.exports.updatesalary=(req, res) => {
   
//     console.log("salary update",req.body)
//     // req.body.file=req.file.url;

     
//     let Tic=req.body.salary
//     console.log("salary!!!!!!!!!!! id",Tic);
    
    
//     salary.update({"salary":Tic},{$set:{ 

//         "salary": req.body.salary,
      

//     }},function(err,data) {                            
//         if (err) {
//             console.log(err);

//             return console.error(err)
            
//         }
//         else{
//             res.send(data)
//         }
//     })


// }


