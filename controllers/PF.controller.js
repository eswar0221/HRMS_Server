  // getPFId delPF updatePF  getPF  AddPF
 

  const mongoose = require('mongoose');

  const Pf = mongoose.model('Pf');
  
  module.exports.AddPF = (req, res, next) => {
      console.log(req.body);
      
      var pf = new Pf();
      pf.Employee_Name = req.body.Employee_Name;
      pf.Empl_Share_Amo = req.body.Empl_Share_Amo;
      pf.Empl_Share_Per = req.body.Empl_Share_Per;
      pf.Provident_Fund_Type = req.body.Provident_Fund_Type;
      pf.Organi_Share_amo = req.body.Organi_Share_amo;
      pf.Organi_Share_per = req.body.Organi_Share_per;
      pf.Description = req.body.Description;    
      pf.date = new Date()
  
     
   
      // req.body.file=req.file.url;
      // pf.file=req.body.file
  
  
      pf.save((err, doc) => {
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
  
  module.exports.getPF=(req, res) => {
      Pf.find(function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  
  
  module.exports.getPFId=(req, res) => {
   
      console.log(req.body)
      let id=req.body.Employee_Name
      Pf.find({"Employee_Name":id},function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  
  
  module.exports.delPF=(req, res) => {
      console.log("del",req.body)
      
      let Tic=req.body.Employee_Name
      console.log("tic!!!!!!!!!!! id",Tic);
      
      Pf.deleteOne({"Employee_Name":Tic},function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  
  
  
  
  
  
  module.exports.updatePF=(req, res) => {
     
      console.log("pf update",req.body)
      // req.body.file=req.file.url;
  
       
      let Holiday_Nam=req.body.Employee_Name
      console.log("pf!!!!!!!!!!! id",Holiday_Nam);
      
      
      Pf.update({"Employee_Name":Holiday_Nam},{$set:{ 
       
"Employee_Name" : req.body.Employee_Name,
"Empl_Share_Amo" :  req.body.Empl_Share_Amo,
"Empl_Share_Per" :  req.body.Empl_Share_Per,
"Provident_Fund_Type" :  req.body.Provident_Fund_Type,
"Organi_Share_amo" :  req.body.Organi_Share_amo,
"Organi_Share_per" :  req.body.Organi_Share_per,
"Description" : req.body.Description,
  
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
  
  
  