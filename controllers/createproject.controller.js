const mongoose = require('mongoose');

const CreateProject = mongoose.model('CreateProject');

module.exports.projectadd = (req, res, next) => {
    console.log(req.body);
    
    var createproject = new CreateProject();
    createproject.projectname = req.body.projectname;
    createproject.startdate = req.body.startdate;
    createproject.projectid = req.body.projectid;
    createproject.status = "Newly Created";
    createproject.projectleader = req.body.projectleader;
    createproject.addteam = req.body.addteam;
    createproject.client = req.body.client;
    createproject.to = req.body.to;
    createproject.priority = req.body.priority;
    createproject.description = req.body.description;
// var addteam=[{
//     addteam:req.body.addteam
// }]
//     createproject.addteam=addteam
    req.body.file=req.file.url;
    createproject.file=req.body.file


    createproject.save((err, doc) => {
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

module.exports.getProjectData=(req, res) => {
    CreateProject.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getprojecid=(req, res) => {
    console.log(req.params);
    
    let id=req.body.projectid

    CreateProject.find({"projectid":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
module.exports.getprojecname=(req, res) => {
    console.log(req.params);
    console.log("pro by name",req.body);
    
    let ids=req.body.projectleader
// console.log("pro ",ids);

    CreateProject.find({"projectleader":ids},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delproject=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.projectid
    console.log("tic!!!!!!!!!!! id",Tic);
    
    CreateProject.deleteOne({"projectid":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.updateproject=(req, res) => {

    req.body.file=req.file.url;
   
    console.log(req.body)
    let pro=req.body.projectid
    CreateProject.update({"projectid":pro},{$set:{ 

        "projectname ": req.body.projectname,
        "startdate ": req.body.startdate,
       "projectid":req.body.projectid,
       "status":req.body.status,
       "projectleader": req.body.projectleader,
       "addteam": req.body.addteam,
       "client": req.body.client,
       "to":req.body.to,
       "priority": req.body.priority,
       "file": req.body.file,
       "description": req.body.description
       

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


