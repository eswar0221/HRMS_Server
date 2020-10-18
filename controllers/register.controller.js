const mongoose = require('mongoose');

const Reg = mongoose.model('Reg');

const jwt=require('jsonwebtoken')

const secretkey=require('../tokenconfig/token');
// const bcrypt = require('bcryptjs');




module.exports.register = (req, res, next) => {
console.log("data",req.body)
    var reg = new Reg();
    reg.firstname = req.body.firstname;
    // reg.username = req.body.username;
    // reg.password = req.body.password;
    reg.employeeid = req.body.employeeid;
    reg.lastname = req.body.lastname;
    reg.company = req.body.company;
    reg.phone = req.body.phone;
    reg.email = req.body.email;
    // reg.cpassword = req.body.cpassword;
    reg.designation = req.body.designation;
    // reg.password=`#${req.body.employeeid}`
    reg.Gender = req.body.Gender;
    reg.Birthday = req.body.Birthday;
    reg.ctc = req.body.ctc;
    
    reg.cpassword="12345678"   
    reg.casual_lev = 8;
    reg.medical_lev =7;
    reg.Reporting_Manager = req.body.Reporting_Manager;
    reg.Joining_Date = req.body.Joining_Date;

    // reg.dateofjoining = req.body.dateofjoining;
    req.body.file=req.file.url;
    reg.file=req.body.file
   
    reg.save((err, doc) => {
        if (!err)
        res.json({status:`true`,message:` ${req.body.employeeid } Registered Successfully `})

            // res.send(doc);
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


// module.exports.login = (req, res, next) => {  
//     Reg.find({'email':req.body.email},(err, doc) => {
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
//               
//             }
//         }
       
//     })  

//     });
// }

module.exports.login = (req, res) => {
    console.log(req.body);
    
        let id=JSON.parse(JSON.stringify(req.body.email).replace(/"\s+|\s+"/g,'"'))
        let pass=JSON.parse(JSON.stringify(req.body.cpassword).replace(/"\s+|\s+"/g,'"'))
        console.log(id)
        Reg.find({'email':id,'cpassword':pass},function (err, stus) {
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


    module.exports.getEmpname=(req, res) => {
 
        console.log(req.body)
        let clientid=req.body.firstname
        Reg.find({"firstname":clientid},function(err,data) {                   
            if (err) {
                return console.error(err)
            }
            else{
                res.send(data)
            }
        })
    }
module.exports.getemployees=(req, res) => {
    Reg.find(function(err,data) {                   
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
//     Reg.find({"employeeid":id},function(err,data) {                           
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }


module.exports.getempbyid=(req, res) => {
 
    console.log("Emp_ID",req.body)
    let clienti=req.body.employeeid 
    Reg.find({"employeeid":clienti},function(err,data) {                   
        if (err) {
            return console.error("EEEEEEEEEE",err)
            // res.json( { message: "false" } )

        }
        else{
            res.send(data)
        }
    })
}
// getEmpByname

module.exports.getEmpByname=(req, res) => {
 
    console.log(req.body)
    let clientid=req.body.email
    Reg.find({"email":clientid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delemployee=(req, res) => {
    console.log("del",req.body)
    
    let employeeid=req.body.employeeid
    console.log("tic!!!!!!!!!!! id",employeeid);
    
    Reg.deleteOne({"employeeid":employeeid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}










module.exports.getempbyname=(req, res) => {   
    console.log(req.params)
    let designation=req.params.designation
    Reg.find({"designation":designation},function(err,data) {                           
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}



module.exports.modifyempdata=(req, res) => {
   
    console.log("update emp",req.body)
    // req.body.file=req.file.url;

    let Phone=req.body.employeeid
    console.log("fdf phon let",Phone);
    
    Reg.update({"employeeid":Phone},{$set:{        
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "employeeid": req.body.employeeid,
       "company": req.body.company,
       "phone": req.body.phone,
       "email":req.body.email,
       "designation": req.body.designation,
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


}

// noofleaves


module.exports.updateEmpLeaves_cas=(req, res) => {
   
    console.log("leaves cas update",req.body)
    // req.body.file=req.file.url;     
    let Tic=req.body.email
    console.log("department!!!!!!!!!!! id",Tic);
    Reg.update({"email":Tic},{$set:{ 
        // "noofleaves": req.body.noofleaves,
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
module.exports.updateEmpLeaves_med=(req, res) => {
   
    console.log("leaves med update",req.body)
    // req.body.file=req.file.url;     
    let Tic=req.body.email
    console.log("department!!!!!!!!!!! id",Tic);
    Reg.update({"email":Tic},{$set:{ 
        // "noofleaves": req.body.noofleaves,
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
    
  
   
    Reg.update({"employeeid":id},{$set:{ 

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

module.exports.updatemppass=(req, res) => {
    console.log(req.body)
    let id=req.body.email
    let pwd=req.body.password
    console.log("hashed",pwd)   
            Reg.update({"email":id},{$set:{ 
     
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