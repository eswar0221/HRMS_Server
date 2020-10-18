  // Holidays Tickets  Activities  Events

  const mongoose = require('mongoose');


  var hrmanperSchema = new mongoose.Schema({

    Dashboard:Boolean,     Employee  :Boolean,        Estimates:Boolean,    Invoices :Boolean,    Expenses :Boolean,  
      Payments :Boolean,   Provident_Fund:Boolean,    Taxes:Boolean,   Expenses_Reports :Boolean,   Invoice_Report :Boolean,  
       Department:Boolean,   Holidays:Boolean,   Dummy:Boolean,    Designations:Boolean,
    Projects :Boolean,    Clients :Boolean,  Leads :Boolean,    Managed_Jobs:Boolean,  Applied_Jobs:Boolean,    Employee_Salary:Boolean,
      Payslip:Boolean,   Leave_Request:Boolean,    Users:Boolean,   Timing_Sheet:Boolean,    Tickets :Boolean,   Email:Boolean,   
         Assets:Boolean,   Events:Boolean,   Activities:Boolean,   
    Profile:Boolean,    Forgot_Password :Boolean,Contact:Boolean,



    // home: {
    //     type: Boolean   
    // } ,
    // Holidays: {
    //       type: Boolean,
    //   },
    //   Tickets: {
    //       type: Boolean,
    //   },
    //   Activities: {
    //       type: Boolean,
    //   },
    //   Events: {
    //       type: Boolean   
    //   }  
    //  ,
  
  });
  mongoose.model('Hrmanper', hrmanperSchema);



























