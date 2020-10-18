const mongoose = require('mongoose');

const Hrman = mongoose.model('Hrman');

const jwt=require('jsonwebtoken')

const secretkey=require('../tokenconfig/token');
const bcrypt = require('bcryptjs');
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
const nodemailer = require('nodemailer');
// const User = require('../models/users');
// const passwordResetToken = require('../models/resettoken');


const passwordResetToken = require('../models/resertoken.model')

module.exports.hrmanreg= (req, res, next) => {
console.log(req.body)
    var hrman = new Hrman();
    hrman.firstname = req.body.firstname;
    // hrman.username = req.body.username;
    // hrman.password = req.body.password;
    hrman.employeeid = req.body.employeeid;
    hrman.lastname = req.body.lastname;
    hrman.company = req.body.company;
    hrman.phone = req.body.phone;
    hrman.email = req.body.email;
    // hrman.cpassword = req.body.cpassword;
    hrman.designation = req.body.designation;
    // hrman.password=`#${req.body.employeeid}`
    hrman.cpassword="12345678"   
    // hrman.noofleaves = 14;
    hrman.casual_lev = 8;
    hrman.medical_lev =7;
    hrman.ctc = req.body.ctc;

    hrman.Reporting_Manager = req.body.Reporting_Manager;
    hrman.Gender = req.body.Gender;
    hrman.Birthday = req.body.Birthday;

    hrman.Joining_Date = req.body.Joining_Date;

    // hrman.dateofjoining = req.body.dateofjoining;
    // hrman.noofleaves = "No leaves";
    req.body.file=req.file.url;
    hrman.file=req.body.file
   
    hrman.save((err, doc) => {
        if (!err)
            // res.send(doc);
        res.json({status:`true`,message:` ${req.body.employeeid } Registered Successfully `})

        // else {
        //     if (err.code == 11000)
        //         res.status(422).send(['Duplicate email adrress found.']);
        //     else
        //         return next(err);
        // }
        else {
            if (err.name === 'ValidationError' ) {
                var valErrors = [];
                Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
               res.status(422).send(valErrors);
            }
            else if (11000 === err.code || 11001 === err.code) {
                var MongooseError = require('mongoose/lib/error')
                var valError = new MongooseError.ValidationError(err)
                valError.errors["xxx"] = new MongooseError.ValidatorError('xxx', 'Duplicate found', err.err)
                res.json({status:`false`,message:`employeeid ${req.body.employeeid}   exists`,key:`${req.body.employeeid}`})
                err = valError
              }   
        } 
    });
}


// module.exports.hrlogin = (req, res, next) => {  
//     Hrman.find({'email':req.body.email},(err, doc) => {
//         bcrypt.compare(req.body.password,doc[0].password,(err,success)=>{
//             if(err){
//             console.log('error while comparing login pw',err)
//             }
//             else{
//             if(success==false){
//             res.send({'message':"invalid password"})
//             }
//             else{
//                 let payload={email:req.body.email};
//                 let token=jwt.sign(payload,secretkey)
//                 res.send({token,data:doc})
//             }
//         }
       
//     })  

//     });
// }

module.exports.hrlogin = (req, res) => {
console.log(req.body);

    let stuid=JSON.parse(JSON.stringify(req.body.email).replace(/"\s+|\s+"/g,'"'))
    let password=JSON.parse(JSON.stringify(req.body.cpassword).replace(/"\s+|\s+"/g,'"'))
    console.log(stuid)
    Hrman.find({'email':stuid,'cpassword':password},function (err, stus) {
        if (stus.length===0) {
            res.json( { message: "false" } )
        }
        else{
            res.send(stus);
            let payload={email:req.body.email};
                       let token=jwt.sign(payload,secretkey)
                        //  res.send({token,data:doc})

        }
     
        
         
     })
}


module.exports.gethrman=(req, res) => {
    Hrman.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


// module.exports.getempbyid=(req, res) => {   
//     console.log(req.params)
//     let id=req.params.id
//     hrman.find({"employeeid":id},function(err,data) {                           
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }
module.exports.gethmname=(req, res) => {
 
    console.log(req.body)
    let clientid=req.body.firstname
    Hrman.find({"firstname":clientid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.gethmbyid=(req, res) => {
 
    console.log(req.body)
    let clientid=req.body.employeeid
    Hrman.find({"employeeid":clientid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
// gethmByname
// getEmpByname
module.exports.gethmByname=(req, res) => {
 
    console.log("nemail",req.body)
    let clientid=req.body.email
    Hrman.find({"email":clientid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

// module.exports.getEmpByname=(req, res) => {
 
//     console.log("nemail",req.body)
//     let clientid=req.body.email
//     Hrman.find({"email":clientid},function(err,data) {                   
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }
module.exports.delhremployee=(req, res) => {
    console.log("del",req.body)
    
    let employeeid=req.body.employeeid
    console.log("tic!!!!!!!!!!! id",employeeid);
    
    Hrman.deleteOne({"employeeid":employeeid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}










// module.exports.getempbyname=(req, res) => {   
//     console.log(req.params)
//     let designation=req.params.designation
//     Hrman.find({"designation":designation},function(err,data) {                           
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }


module.exports.updatehrman=(req, res) => {
    console.log(req.body)
    let id=req.body.employeeid
    let pwd=req.body.password
    console.log("hashed",pwd)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pwd, salt, (err, hash) => {
            req.body.password = hash;
            console.log("hashed",req.body.password)
            // this.saltSecret = salt;
            // next();
   
    Hrman.update({"employeeid":id},{$set:{ 

        "firstname ": req.body.firstname,
        "lastname ": req.body.lastname,
       "username":req.body.username,
       "password":req.body.password,
       "employeeid": req.body.employeeid,
       "company": req.body.company,
       "phone": req.body.phone,
       "email":req.body.email,
       "cpassword": req.body.cpassword,
       "designation": req.body.designation,
"Joining_Date" : req.body.Joining_Date,
"Gender" : req.body.Gender,
"Birthday" : req.body.Birthday,
"Reporting_Manager":req.body.Reporting_Manager,
"ctc":req.body.ctc,

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })

});
        
});

}
module.exports.updatehrpass=(req, res) => {
    console.log(req.body)
    let id=req.body.email
    // let pwd=req.body.password
    // console.log("hashed",pwd)   
    Hrman.update({"email":id},{$set:{ 
     
    //    "password":req.body.password,      
           "cpassword": req.body.cpassword,
     

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}



module.exports.updatehrmanLeaves_cas=(req, res) => {
   
    console.log("leaves update",req.body)
    // req.body.file=req.file.url;     
    let Tic=req.body.email
    console.log("department!!!!!!!!!!! id",Tic);
    Hrman.update({"email":Tic},{$set:{ 

        "casual_lev":req.body.casual_lev,
        // "medical_lev":req.body.medical_lev,
      

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
module.exports.updatehrmanLeaves_med=(req, res) => {
   
    console.log("leaves update",req.body)
    // req.body.file=req.file.url;     
    let Tic=req.body.email
    console.log("department!!!!!!!!!!! id",Tic);
    Hrman.update({"email":Tic},{$set:{ 

        // "casual_lev":req.body.casual_lev,
        "medical_lev":req.body.medical_lev,
      

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


module.exports.addleavestoemp=(req, res) => {
    console.log(req.body)
    let id=req.body.employeeid
    
  
   
    hrman.update({"employeeid":id},{$set:{ 

        "casual_lev":req.body.casual_lev,
        "medical_lev":req.body.medical_lev,
    
    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}

