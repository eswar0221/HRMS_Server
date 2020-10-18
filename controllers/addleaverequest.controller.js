const mongoose = require('mongoose');

const dateFormat = require('dateformat');
const format = require('date-format');
const Leave = mongoose.model('Leave');

module.exports.addleave = (req, res, next) => {
    console.log(req.body);
     var leave = new Leave();
    leave.employeename = req.body.employeename;
    leave.employeeid = req.body.employeeid;
    leave.leaveid = req.body.leaveid;
    leave.fday = req.body.fday;
    leave.fmonth = req.body.fmonth;
    leave.fyear = req.body.fyear;
    leave.tday = req.body.tday;
    leave.tmonth = req.body.tmonth;
    leave.tyear = req.body.tyear;
    leave.losofpay = req.body.losofpay;    
    // leave.leav_ap_mon = req.body.leav_ap_mon;
    // leave.leav_ap_year = req.body.leav_ap_year;
  
    // leave.to = req.body.to;
    leave.leavetype = req.body.leavetype;
    leave.designation = req.body.designation;
    leave.leavereason = req.body.leavereason;
    leave.email = req.body.email;
    // leave.noofleaves = req.body.noofleaves;
    leave.total_casual_leaves = req.body.total_casual_leaves;
    leave.total_medi_leaves = req.body.total_medi_leaves;

    leave.casual_lev = req.body.casual_lev;
    leave.medical_lev = req.body.medical_lev;


    leave.status="Apply";
    leave.Reporting_Manager=req.body.Reporting_Manager;
    leave.No_Of_Days_Leave_Apply = req.body.No_Of_Days_Leave_Apply;
    leave.date = new Date()

    // format(new Date());
    // format('hh:mm:ss.SSS', new Date());
    
//     leave.date= format('hh:mm:ss.SSS', new Date());
// //    leave.date=dateFormat(now, "isoDateTime");
//     console.log("date1",date);
    
    // leave.date = now
    // leave.date=req.body.date;
    // No_Of_Days_Leave_Apply
    leave.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate Leave ID adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.getleavedata=(req, res) => {
    // console.log(req.params)
    let id=req.params.id
    Leave.find(function(err,data) {                           
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}




module.exports.getleaveId=(req, res) => {
 
    console.log(req.body)
    let id=req.body.leaveid
    Leave.find({"leaveid":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.getMonYearLeav=(req, res) => {
 
    console.log(req.body)
    let id=req.body.employeeid
    let idm=req.body.fmonth
    let idy=req.body.fyear

    Leave.find({"employeeid":id,"fmonth":idm,"fyear":idy},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.delleaveid=(req, res) => {
    console.log("del",req.body)
    
    let employ=req.body.leaveid
    console.log("tic!!!!!!!!!!! id",employ);
    
    Leave.deleteOne({"leaveid":employ},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getleaveemail=(req, res) => {
    console.log("email get leave",req.body)
    
    let employ=req.body.email
    console.log("tic!!!!!!!!!!! id",employ);
    
    Leave.find({"email":employ},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.updateleve=(req, res) => {
   
    console.log("update updateleve",req.body)
    // req.body.file=req.file.url;

    let emplo=req.body.leaveid
    // console.log("fdf updateleve let",employeename);
    
    Leave.update({"leaveid":emplo},{$set:{ 

       
       "employeename":req.body.employeename,
       "employeeid":req.body.employeeid,
    //    "from": req.body.from,
       "email": req.body.email,
"leaveid":req.body.leaveid,
       "leavetype": req.body.leavetype,
       "designation": req.body.designation,
       "leavereason": req.body.leavereason,
       "status":req.body.status,     
    //    "to": req.body.to,
    // "noofleaves" : req.body.noofleaves,
    // "totalleaves": req.body.totalleaves,
    "No_Of_Days_Leave_Apply": req.body.No_Of_Days_Leave_Apply,
    "fday": req.body.fday,
    "fmonth": req.body.fmonth,
    // "fyear": req.body.fyear,
    "tday": req.body.tday,
    "tmonth": req.body.tmonth,
    "casual_lev":req.body.casual_lev,
    "medical_lev":req.body.medical_lev,
    // "tyear": req.body.tyear,
    // "losofpay":req.body.losofpay,
    // "leav_ap_mon":req.body.noofleaves,
    // "leav_ap_year": req.body.noofleaves,
    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}































