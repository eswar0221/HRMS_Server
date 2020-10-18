  // Holidays Tickets  Activities  Events
  const mongoose = require('mongoose');
  const Empper = mongoose.model('Empper');
  
  
  module.exports.EmpPerreg = (req, res) => {
      var empper = new Empper(req.body);
      console.log(req.body);
      
      empper.home = req.body.home;
      empper.Holidays = req.body.Holidays;
      empper.Tickets = req.body.Tickets;
      empper.Activities = req.body.Activities;
      empper.Events = req.body.Events;
      
      empper.Leave_Request = req.body.Leave_Request;
      empper.jobs = req.body.jobs;


      empper.save((err, doc) => {
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
  
  module.exports.getEmpper = (req, res) => {
    
      Empper.find(function (err, Emppers ) {
          if (err)
           return console.error(err); 
           res.send(Emppers);
       })
  }
  // dUpdate
  
  
  module.exports.Empperupdate=(req, res) => {
       
      console.log("doc update",req.body)
      // req.body.file=req.file.url;
  
       
      let Holiday_Nam=req.body.home
      console.log("doc!!!!!!!!!!! id",Holiday_Nam);
      
      
      Empper.update({"home":Holiday_Nam},{$set:{ 
         "home":req.body.home,

          "Holidays": req.body.Holidays,
          "Tickets": req.body.Tickets,
         "Activities":req.body.Activities,
         "Events":req.body.Events,
         "Leave_Request":req.body.Leave_Request,
         "jobs":req.body.jobs,
  
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
  
  
  
  // module.exports.sendcheckbox_doctor = (req, res) => {
  //         let Holidayss=JSON.parse(JSON.stringify(req.body.Holidays).replace(/"\s+|\s+"/g,'"'))
  //         let Ticketss=JSON.parse(JSON.stringify(req.body.Tickets).replace(/"\s+|\s+"/g,'"'))
  //         let Activitiess=JSON.parse(JSON.stringify(req.body.Activities).replace(/"\s+|\s+"/g,'"'))
  //         let Eventss=JSON.parse(JSON.stringify(req.body.Events).replace(/"\s+|\s+"/g,'"'))
  
  //     Empper.updateMany({'_id':'5e234a6c6aa1c11708e7650c' }, {$set: {'Holidays': Holidayss,'Tickets':Ticketss,'Activities':Activitiess,'Events':Eventss}},function (err, inwarts) {
  //         if (err)
  //          return console.error(err); 
  //          res.send(inwarts);
  //      })
  // }
  