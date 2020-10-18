

const mongoose = require('mongoose');

const Jobs = mongoose.model('Jobs');

// const jwt=require('jsonwebtoken')

// const secretkey=require('../tokenconfig/token');
// const bcrypt = require('bcryptjs');
module.exports.jobsadd = (req, res, next) => {
// console.log(req.body)
    var jobs = new Jobs();
    jobs.Job_Id=req.body.Job_Id

    jobs.Job_Title = req.body.Job_Title;
    jobs.Job_Location = req.body.Job_Location;
    jobs.Experience = req.body.Experience;
    jobs.Salary_From = req.body.Salary_From;
    jobs.Job_Type = req.body.Job_Type;
    jobs.Start_Date = req.body.Start_Date;
    jobs.Department = req.body.Department;
    jobs.No_of_Vacancies = req.body.No_of_Vacancies;
    jobs.Age = req.body.Age;
    jobs.Salary_To = req.body.Salary_To;
    jobs.Expired_Date = req.body.Expired_Date;
    jobs.Status =req.body.Status;
    jobs.Description=req.body.Description
    
    jobs.save((err, doc) => {
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



module.exports.deljobs=(req, res) => {
    console.log("Job_Id del",req.body)
    
    let Job_Id = req.body.Job_Id;
    console.log("Job_Title!!!!!!!!!!! id",Job_Id);
    
    Jobs.deleteOne({"Job_Id":Job_Id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getjobsno=(req, res) => {

console.log("Job_Id",req.body)
let Jobsi=req.body.Job_Id
Jobs.find({"Job_Id":Jobsi},function(err,data) {                   
    if (err) {
        return console.error(err)
    }
    else{
        res.send(data)
    }
})
}
module.exports.getjobsdata=(req, res) => {
Jobs.find(function(err,data) {                   
    if (err) {
        return console.error(err)
    }
    else{
        res.send(data)
    }
})
}

// Job_Title

// Job_Location
// Experience
// Salary_From
// Job_Type
// Start_Date
// Department
// No_of_Vacancies
// Age
// Salary_To
// Status
// Expired_Date
// Description


module.exports.updatejobs=(req, res) => {
            // req.body.file=req.file.url;
       
        console.log("Job_Id Update",req.body)
        let id=req.body.Job_Id
        console.log(id);
        
        Jobs.update({"Job_Id":id},{$set:{ 

    "Job_Id ": req.body.Job_Id,
    "Job_Title ": req.body.Job_Title,
   "Job_Location":req.body.Job_Location,
   "Experience":req.body.Experience,
   "Salary_From": req.body.Salary_From,
   "Job_Type": req.body.Job_Type,
 
   "Start_Date": req.body.Start_Date,
   "Department": req.body.Department,
   "No_of_Vacancies": req.body.No_of_Vacancies,
   "Age": req.body.Age,
   "Salary_To": req.body.Salary_To,
   "Expired_Date": req.body.Expired_Date,
   "Status": req.body.Status,
   "Description": req.body.Description,
   

}},function(err,data) {                            
    if (err) {
        return console.error(err)
    }
    else{
        res.send(data)
    }
})


}













































