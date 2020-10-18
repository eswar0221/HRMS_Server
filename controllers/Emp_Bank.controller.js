  // getempbankId delempbank updateempbank  getempbank  Addempbank   getempbankemail
//   Employee_Name  email employeeid phone Emp_Bank_no Branch Ifsc_Code  designation  

  const mongoose = require('mongoose');

  const Empbank = mongoose.model('Empbank');
  
  module.exports.Addempbank = (req, res, next) => {
      console.log("bank emp",req.body);
      
      var empbank = new Empbank();
      empbank.firstname = req.body.firstname;
    //   Employee_Name
      empbank.email = req.body.email;
      empbank.employeeid = req.body.employeeid;
      empbank.phone = req.body.phone;
      empbank.Emp_Bank_no = req.body.Emp_Bank_no;
      empbank.Branch = req.body.Branch;
      empbank.Ifsc_Code = req.body.Ifsc_Code;    
      empbank.designation = req.body.designation;
      empbank.UAN_NO = req.body.UAN_NO;
      empbank.PF_NO = req.body.PF_NO;
      empbank.EPS_No = req.body.EPS_No;
      empbank.Bank_name = req.body.Bank_name;
      empbank.PAN_NO = req.body.PAN_NO;
      empbank.ESI_NO = req.body.ESI_NO;

      


    //   empbank.Tax_Percentage = req.body.Tax_Percentage;
      empbank.date = new Date() 
      empbank.save((err, doc) => {   
          if (!err)
          res.json({status:`true`,message:` ${req.body.employeeid } Registered Successfully `}) 
            
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
  
  module.exports.getempbank=(req, res) => {
    Empbank.find(function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  
  
  module.exports.getempbankId=(req, res) => {
   
      console.log("bank id",req.body)
      let id=req.body.employeeid;
      Empbank.find({"employeeid":id},function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  module.exports.getempbankName=(req, res) => {
   
    console.log(req.body)
    let ids=req.body.firstname
    Empbank.find({"firstname":ids},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
  module.exports.getempbankemail=(req, res) => {
   
    console.log(req.body)
    let ids=req.body.email
    Empbank.find({"email":ids},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
  
  module.exports.delempbank=(req, res) => {
      console.log("del",req.body)
      
      let Tic=req.body.employeeid
      console.log("tic!!!!!!!!!!! id",Tic);
      
      Empbank.deleteOne({"employeeid":Tic},function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  
  
  
//   Employee_Name  email employeeid phone Emp_Bank_no Branch Ifsc_Code  designation  
  
  
  
  module.exports.updateempbank=(req, res) => {     

      console.log("empbank update",req.body)       
      let Holiday_Nam=req.body.employeeid
      console.log("empbank!!!!!!!!!!! id",Holiday_Nam);     
      Empbank.update({"employeeid":Holiday_Nam},{$set:{        
"firstname" : req.body.firstname,
"email" :  req.body.email,
"employeeid" :  req.body.employeeid,
"phone" :  req.body.phone,
"Emp_Bank_no" :  req.body.Emp_Bank_no,
"Branch" :  req.body.Branch,
"Ifsc_Code" : req.body.Ifsc_Code,
"designation" : req.body.designation, 
"UAN_NO" :req.body.UAN_NO,
     "PF_NO" : req.body.PF_NO,
      "EPS_No" : req.body.EPS_No,
      "Bank_name" : req.body.Bank_name,
     "PAN_NO" : req.body.PAN_NO,
     "ESI_NO" : req.body.ESI_NO
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
  
  
  