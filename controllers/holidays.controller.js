
const mongoose = require('mongoose');

const Holidays = mongoose.model('Holidays');

module.exports.Regholidays = (req, res, next) => {
    console.log(req.body);
    
    var holidays = new Holidays();
    holidays.Holiday_Name = req.body.Holiday_Name;
    holidays.Holiday_Date = req.body.Holiday_Date;
  
    holidays.date = new Date()

   
 
    // req.body.file=req.file.url;
    // holidays.file=req.body.file


    holidays.save((err, doc) => {
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

module.exports.getholidaysdata=(req, res) => {
    Holidays.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getholidaysno=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Holiday_Name
    Holidays.find({"Holiday_Name":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delholidays=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.Holiday_Name
    console.log("tic!!!!!!!!!!! id",Tic);
    
    Holidays.deleteOne({"Holiday_Name":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}






module.exports.updateholidays=(req, res) => {
   
    console.log("holidays update",req.body)
    // req.body.file=req.file.url;

     
    let Holiday_Nam=req.body.Holiday_Name
    console.log("holidays!!!!!!!!!!! id",Holiday_Nam);
    
    
    Holidays.update({"Holiday_Name":Holiday_Nam},{$set:{ 
        "Holiday_Name": req.body.Holiday_Name,
        "Holiday_Date": req.body.Holiday_Date,
      

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


