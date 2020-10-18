const mongoose = require('mongoose');

const Addtiming = mongoose.model('Addtiming');

module.exports.addtimingreg = (req, res, next) => {
    console.log("clent reg",req.body);
    // first_Name Last_Name Designationt Project  Deadline Total_Hours  Remaining_Hours today_Date Hours Description
    var addtiming = new Addtiming();
    addtiming.first_Name = req.body.first_Name;
    addtiming.Last_Name = req.body.Last_Name;
    addtiming.Designationt = req.body.Designationt;
    addtiming.Project = req.body.Project;
    addtiming.Deadline =req.body.Deadline;
    addtiming.Total_Hours =req.body.Total_Hours;
    addtiming.Remaining_Hours =req.body.Remaining_Hours;
    addtiming.today_Date =req.body.today_Date; 
    addtiming.Hours =req.body.Hours;
    addtiming.Description=req.body.Description;
   
    // addtiming.date = new Date()

    addtiming.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate today_Date adrress found.']);
            else
                return next(err);
        }

    });
}
module.exports.updateaddtimings=(req, res) => {

    // req.body.file=req.file.url;
   
    console.log("addtiming Update",req.body)
    let id=req.body.Project
    console.log(id);
    
    Addtiming.update({"Project":id},{$set:{ 

        "first_Name": req.body.first_Name,
        "Last_Name" : req.body.Last_Name,
        "Project" : req.body.Project,
        "Designationt"    : req.body.Designationt,
        "Deadline" : req.body.Deadline,
        "Total_Hours": req.body.Total_Hours,
        "Remaining_Hours" :req.body.Remaining_Hours,
        "today_Date": req.body.today_Date,
        "Hours"    : req.body.Hours,
        "Description"    : req.body.Description,
       
       
       

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


    module.exports.deladdtimings=(req, res) => {
        console.log("deldata del",req.body)
        
        let Remaining = req.body.first_Name;
        console.log("Remaining_Hours!!!!!!!!!!! id",Remaining);
        
        Addtiming.deleteOne({"first_Name":Remaining},function(err,data) {                   
            if (err) {
                return console.error(err)
            }
            else{
                res.send(data)
            }
        })
    }
    

// module.exports.getaddtimingsID=(req, res) => {
 
//     console.log(req.body)
//     let Remaining_Hou=req.body.Project
//     Addtiming.find({"Project":Remaining_Hou},function(err,data) {                   
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }

// module.exports.getaddtimingsID=(req, res) => {
//     console.log(req.body);
    
//     let id=req.body.Project
// console.log("times add get",id);

//     Addtiming.find({"Project":id},function(err,data) {                   
//         if (err) {
//             return console.error(err)
//         }
//         else{
//             res.send(data)
//         }
//     })
// }


module.exports.getaddtimingsID=(req, res) => {
 
    console.log(req.body)
    let clientid=req.body.first_Name
    Addtiming.find({"first_Name":clientid},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}




module.exports.getaddtimings=(req, res) => {
    Addtiming.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


