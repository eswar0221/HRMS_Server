
// AddTasks updateTask    gettasks  delTasks   getTaskID


const mongoose = require('mongoose');

const Tasks = mongoose.model('Tasks');

module.exports.AddTasks = (req, res, next) => {
    console.log(req.body);
    
    var tasks = new Tasks();
    tasks.Task_Name = req.body.Task_Name;
    tasks.Description = req.body.Description;
    tasks.Employeeid = req.body.Employeeid;
    tasks.Employee_Name = req.body.Employee_Name;
    tasks.email = req.body.email;
    tasks.status = "open";
   

    tasks.date = new Date()

 
   


    tasks.save((err, doc) => {
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

module.exports.gettasks=(req, res) => {
    Tasks.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getTaskID=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Task_Name
    Tasks.find({"Task_Name":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.getTaskEmail=(req, res) => {
 
    console.log(req.body)
    let id=req.body.email
    Tasks.find({"email":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.delTasks=(req, res) => {
    console.log("del",req.body)
    
    let Phon=req.body.Employeeid
    console.log("tic!!!!!!!!!!! id",Phon);
    
    Tasks.deleteOne({"Employeeid":Phon},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.updateTask=(req, res) => {
   
    console.log("update tasks",req.body)
    // req.body.file=req.file.url;

    let Phone=req.body.Task_Name
    console.log("fdf phon let",Phone);
    
    Tasks.update({"Task_Name":Phone},{$set:{        
       "Task_Name":req.body.Task_Name,
       "Description": req.body.Description,
       "Employeeid": req.body.Employeeid,
       "Employee_Name": req.body.Employee_Name,
       "email":req.body.email,
       "status":req.body.status,
    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


