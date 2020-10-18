//   hmperupdate   gethmper  hmPerreg


const mongoose = require('mongoose');
const Hrmanper = mongoose.model('Hrmanper');


module.exports.hmPerreg = (req, res) => {
    var hrmanper = new Hrmanper(req.body);
    hrmanper.Dashboard = req.body.Dashboard;
    hrmanper.Employee = req.body.Employee;
    hrmanper.Estimates = req.body.Estimates;
    hrmanper.Invoices = req.body.Invoices;
    hrmanper.Expenses = req.body.Expenses;
    hrmanper.Payments = req.body.Payments;
    hrmanper.Provident_Fund = req.body.Provident_Fund;
    hrmanper.Taxes = req.body.Taxes;
    hrmanper.Expenses_Reports = req.body.Expenses_Reports;
    hrmanper.Invoice_Report = req.body.Invoice_Report;
    hrmanper.Department = req.body.Department;
    hrmanper.Holidays = req.body.Holidays;
    hrmanper.Dummy = req.body.Dummy;
    hrmanper.Designations = req.body.Designations;
    hrmanper.Projects = req.body.Projects;
    hrmanper.Clients = req.body.Clients;
    hrmanper.Leads = req.body.Leads;
    hrmanper.Managed_Jobs = req.body.Managed_Jobs;
    hrmanper.Applied_Jobs = req.body.Applied_Jobs;
    hrmanper.Employee_Salary = req.body.Employee_Salary;
    hrmanper.Payslip = req.body.Payslip;
    hrmanper.Leave_Request = req.body.Leave_Request;
    hrmanper.Users = req.body.Users;
    hrmanper.Timing_Sheet = req.body.Timing_Sheet;
    hrmanper.Tickets = req.body.Tickets;
    hrmanper.Email = req.body.Email;
    hrmanper.Assets = req.body.Assets;
    hrmanper.Events = req.body.Events;
    hrmanper.Activities = req.body.Activities;
    hrmanper.Profile = req.body.Profile;
    hrmanper.Forgot_Password = req.body.Forgot_Password;
    hrmanper.Contact = req.body.Contact;

    hrmanper.save((err, doc) => {
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

module.exports.gethmper = (req, res) => {
  
    Hrmanper.find(function (err, data ) {
        if (err)
         return console.error(err); 
         res.send(data);
     })
}
// dUpdate


module.exports.hmperupdate=(req, res) => {
     
    console.log("doc update",req.body)
    // req.body.file=req.file.url;
// Dashboard      Employee        Estimates  Invoices    Expenses    Payments  Provident_Fund  Taxes  Expenses_Reports  Invoice_Report  Department Holidays Dummy  Designations
  // Projects   Clients  Leads   Managed_Jobs Applied_Jobs  Employee_Salary Payslip Leave_Request  Users  Timing_Sheet  Tickets  Email    Assets  Events Activities Assets
  // Profile    Forgot_Password 
     
    let Holiday_Nam=req.body.Dashboard
    console.log("doc!!!!!!!!!!! id",Holiday_Nam);
    
    
    Hrmanper.update({"Dashboard":Holiday_Nam},{$set:{ 
       "Dashboard":req.body.Dashboard,

        "Employee": req.body.Employee,
        "Estimates": req.body.Estimates,
       "Invoices":req.body.Invoices,
       "Expenses":req.body.Expenses,
       "Payments":req.body.Payments,
       "Provident_Fund":req.body.Provident_Fund,
       "Expenses_Reports":req.body.Expenses_Reports,
       "Invoice_Report":req.body.Invoice_Report,
       "Department":req.body.Department,
       "Holidays":req.body.Holidays,
       "Dummy":req.body.Dummy,
       "Designations":req.body.Designations,
       "Projects":req.body.Projects,
       "Clients":req.body.Clients,
       "Leads":req.body.Leads,
       "Managed_Jobs":req.body.Managed_Jobs,
       "Applied_Jobs":req.body.Applied_Jobs,
       "Employee_Salary":req.body.Employee_Salary,
       "Payslip":req.body.Payslip,
       "Leave_Request":req.body.Leave_Request,
       "Users":req.body.Users,
       "Timing_Sheet":req.body.Timing_Sheet,
       "Tickets":req.body.Tickets,
       "Email":req.body.Email,
       "Assets":req.body.Assets,
       "Events":req.body.Events,
       "Activities":req.body.Activities,
       "Profile":req.body.Profile,
       "Forgot_Password":req.body.Forgot_Password,
       "Contact":req.body.Contact,
       "Taxes":req.body.Taxes,
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
