// modifydata  getmempbyname delmemployee getmempbyid Manregister

const mongoose = require('mongoose');

const Manregister = mongoose.model('Manregister');

const jwt=require('jsonwebtoken')

const secretkey=require('../tokenconfig/token');
const bcrypt = require('bcryptjs');




module.exports.Manregister = (req, res, next) => {
// console.log(req.body)
    var manregister = new Manregister();
  
    manregister.username = req.body.username;
    manregister.password = req.body.password;
  

    manregister.email = req.body.email;
    manregister.cpassword = req.body.cpassword;
 
    


   
    manregister.save((err, doc) => {
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


module.exports.Mlogin = (req, res, next) => {  
    Manregister.find({'email':req.body.email},(err, doc) => {
        bcrypt.compare(req.body.password,doc[0].password,(err,success)=>{
            if(err){
            console.log('error while comparing login pw',err)
            }
            else{
            if(success==false){
            res.send({'message':"invalid password"})
            }
            else{
                let payload={email:req.body.email};
                let token=jwt.sign(payload,secretkey)
                res.send({token,data:doc})
            }
        }
       
    })  

    });
}





module.exports.getmemployees=(req, res) => {
    Manregister.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}




// module.exports.getmempbyid=(req, res) => {
 
//     console.log("data",req.body)
//     let id=req.body.email
//     Manregister.find({"email":id},function(err,data) {                   
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }





module.exports.delmemployee=(req, res) => {
    console.log("del",req.body)
    
    let employeeid=req.body.username
    console.log("tic!!!!!!!!!!! id",employeeid);
    
    Manregister.deleteOne({"username":employeeid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}



// getmempbyid
// getmempbyname




module.exports.getmempbyid=(req, res) => {   
    console.log(req.body)
    let desig=req.body.email
    Manregister.find({"email":desig},function(err,data) {                           
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


// updatepass



module.exports.updatepass=(req, res) => {
    console.log(req.body)
    let id=req.body.email
    let pwd=req.body.password
    console.log("hashed",pwd)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pwd, salt, (err, hash) => {
            req.body.password = hash;
            console.log("hashed",req.body.password)
            // this.saltSecret = salt;
            // next();
   
    Manregister.update({"email":id},{$set:{ 

     
       "password":req.body.password,      
           "cpassword": req.body.cpassword,
     

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








module.exports.modifydata=(req, res) => {
    console.log(req.body)
    let id=req.body.username
    let pwd=req.body.password
    console.log("hashed",pwd)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pwd, salt, (err, hash) => {
            req.body.password = hash;
            console.log("hashed",req.body.password)
            // this.saltSecret = salt;
            // next();
   
    Manregister.update({"username":id},{$set:{ 

        
       "username":req.body.username,
       "password":req.body.password,
      
       "email":req.body.email,
       "cpassword": req.body.cpassword,
     

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

































