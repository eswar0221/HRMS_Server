  // RegExpenses getExpenses getExpensesno updateExpenses delExpenses
  const mongoose = require('mongoose');

  const Expenses = mongoose.model('Expenses');
  
  module.exports.RegExpenses = (req, res, next) => {
      console.log("Expenses",req.body);
    //   Item_Name Purchase_Date Amount Status Purchase_From     Purchased_By    Paid_By
      var expenses = new Expenses();
      expenses.Expensives_ID = req.body.Expensives_ID;
      expenses.Purchased_By = req.body.Purchased_By;
      expenses.email = req.body.email;
      expenses.Item_Name = req.body.Item_Name;
    //   expenses.Purchase_Date = req.body.Purchase_Date;
    expenses.pday = req.body.pday;
    expenses.pmonth = req.body.pmonth;
    expenses.pyear = req.body.pyear;

      expenses.Purchase_From = req.body.Purchase_From;
      expenses.Paid_By = req.body.Paid_By;
      expenses.Amount = req.body.Amount;
      expenses.gst = req.body.gst;
      expenses.total_amount = req.body.total_amount;
      expenses.Status = "Pending";

      
    //   expenses.Purchased_By = req.body.Purchased_By;
    // expenses.status ="Pending";
  
      expenses.date = new Date()
  
   
      req.body.file=req.file.url;
      expenses.file=req.body.file
  
  
      expenses.save((err, doc) => {
          if (!err)
              res.send(doc);
              else {
                if (err.code == 11000)
                    res.status(422).send(['Duplicate  adrress found.']);
                else
                    return next(err);
            }
  
      });
  }
  
  module.exports.getExpenses=(req, res) => {
      Expenses.find(function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  
  
  module.exports.getExpensesno=(req, res) => {
   
      console.log(req.body)
      let id=req.body.Item_Name
      Expenses.find({"Item_Name":id},function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  module.exports.getExpensesEMAIL=(req, res) => {
    console.log("email get EXP",req.body)
    
    let employ=req.body.email
    console.log("EXP!!!!!!!!!!! id",employ);
    
    Expenses.find({"email":employ},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
module.exports.getExpenses_ID=(req, res) => {
    console.log("id get EXP",req.body)
    
    let employ=req.body.Expensives_ID
    console.log("EXP!!!!!!!!!!! id",employ);
    
    Expenses.find({"Expensives_ID":employ},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
} 

  module.exports.delExpenses=(req, res) => {
      console.log("del",req.body)
      
      let Phone=req.body.Item_Name
      console.log("tic!!!!!!!!!!! id",Phone);
      
      Expenses.deleteOne({"Item_Name":Phone},function(err,data) {                   
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  }
  
  
  module.exports.updateExpenses=(req, res) => {
     
      console.log("update expenses",req.body)
    //   req.body.file=req.file.url;
  
      let Phon=req.body.Expensives_ID
      console.log("fdf phon let",Phon);
      
      Expenses.update({"Expensives_ID":Phon},{$set:{ 
        "Status": req.body.Status,
  
          //   Item_Name Purchase_Date Amount Status Purchase_From     Purchased_By    Paid_By
         
        //  "Item_Name":req.body.Item_Name,
        //  "Purchase_Date": req.body.Purchase_Date,
        //  "Amount": req.body.Amount,
         
        //  "Purchase_From":req.body.Purchase_From,  
        //  "Purchased_By": req.body.Purchased_By,
        //  "Paid_By": req.body.Paid_By,            
        //  "file": req.body.file,
   
  
      }},function(err,data) {                            
          if (err) {
              return console.error(err)
          }
          else{
              res.send(data)
          }
      })
  
  
  }
  
  
  