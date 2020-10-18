// getempsalId
// delempsal
// updateempsal
// getempsal
// Addempsal

const mongoose = require('mongoose');

const Emp_salary = mongoose.model('Emp_salary');

module.exports.Addempsal = (req, res, next) => {
    console.log(req.body);
    // employeeid
    // Basic
    // DA HRA  Conveyance  
    // Allowance
    
    // Medical_Allowance   Earnings_Others  Net_Salary  TDS  ESI  PF  Leave   Prof_Tax Labour_Welfare Fund  Loan Deductions_Others

    var emp_salary = new Emp_salary();


    emp_salary.employeeid = req.body.employeeid;
    emp_salary.salID = req.body.salID;

    
    emp_salary.firstname = req.body.firstname;
    emp_salary.email = req.body.email;
    emp_salary.designation = req.body.designation;
    emp_salary.Joining_Date = req.body.Joining_Date;

    emp_salary.Net_Salary = req.body.Net_Salary;

    emp_salary.Basic = req.body.Basic;
    emp_salary.DA = req.body.DA;
    emp_salary.HRA = req.body.HRA;
    emp_salary.Conveyance = req.body.Conveyance;
    emp_salary.Allowance = req.body.Allowance;
    emp_salary.Medical_Allowance = req.body.Medical_Allowance;
    emp_salary.Earnings_Others = req.body.Earnings_Others;
    emp_salary.TDS = req.body.TDS;
    emp_salary.ESI = req.body.ESI;

    emp_salary.PF = req.body.PF;
    emp_salary.Leave = req.body.Leave;
    emp_salary.Prof_Tax = req.body.Prof_Tax;
    emp_salary.Labour_Welfare = req.body.Labour_Welfare;
    emp_salary.Fund = req.body.Fund;
    emp_salary.Loan = req.body.Loan;
    emp_salary.Deductions_Others = req.body.Deductions_Others;
    emp_salary.PAYSLIP_ID=`#${req.body.employeeid}`
    
    emp_salary.Total_Earnings = req.body.Total_Earnings;
     emp_salary.Total_Deductions = req.body.Total_Deductions;

    
   


    emp_salary.save((err, doc) => {
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

module.exports.getempsal=(req, res) => {
    Emp_salary.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getempsalId=(req, res) => {
    // console.log(req.params);
    // employeeid
    console.log("sal id",req.body);
    
    let id=req.body.employeeid

    Emp_salary.find({"employeeid":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delempsal=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.employeeid
    console.log("tic!!!!!!!!!!! id",Tic);
    
    Emp_salary.deleteOne({"employeeid":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.updateempsal=(req, res) => {

    // req.body.file=req.file.url;
   
    console.log(req.body)
    let pro=req.body.employeeid
    Emp_salary.update({"employeeid":pro},{$set:{ 
  // employeeid
    // Basic
    // DA HRA  Conveyance  
    // Allowance
    
    // Medical_Allowance   Earnings_Others  Net_Salary  TDS  ESI  PF  Leave   Prof_Tax Labour_Welfare Fund  Loan Deductions_Others
        "employeeid ": req.body.employeeid,
        "Basic ": req.body.Basic,
       "DA":req.body.DA,
       "salID":req.body.salID,
    //    "status":"Updated",
       "HRA": req.body.HRA,
       "Conveyance": req.body.Conveyance,
       "Allowance": req.body.Allowance,
       "Medical_Allowance":req.body.Medical_Allowance,
       "Earnings_Others": req.body.Earnings_Others,
       "Net_Salary": req.body.Net_Salary,
       "TDS": req.body.TDS,
       "ESI": req.body.ESI,
       "PF": req.body.PF,
       "Leave": req.body.Leave,
       "Prof_Tax": req.body.Prof_Tax,
       "Labour_Welfare": req.body.Labour_Welfare,
       "Fund": req.body.Fund,
       "Loan": req.body.Loan,
       "Deductions_Others": req.body.Deductions_Others,


       "Total_Deductions":req.body.Total_Deductions,
       "Total_Earnings":req.body.Total_Earnings,


    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


