const mongoose = require('mongoose');

const ApplyJob = mongoose.model('ApplyJob');

module.exports.sendjobApp = (req, res, next) => {
    console.log(req.body);
    
    var applyJob = new ApplyJob();
    
    applyJob.Job_Id = req.body.Job_Id;
    applyJob.Name = req.body.Name;

    applyJob.Email = req.body.Email;
    
    applyJob.Phone = req.body.Phone;

    applyJob.Message = req.body.Message;
    
    applyJob.status = "NEW";

    applyJob.date = new Date()

 
    req.body.file=req.file.url;
    applyJob.file=req.body.file


    applyJob.save((err, doc) => {
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

module.exports.getSendapplyJobdata=(req, res) => {
    ApplyJob.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getSendapplyJobno=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Job_Id
    ApplyJob.find({"Job_Id":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
