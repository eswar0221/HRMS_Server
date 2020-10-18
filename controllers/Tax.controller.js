// Taxadd getTax  updateTaxl delTax getTaxlId
// Tax_Name Tax_Percentage  Status


const mongoose = require('mongoose');

const Tax = mongoose.model('Tax');

module.exports.Taxadd = (req, res, next) => {
    console.log(req.body);
    
    var tax = new Tax();
    tax.Tax_Name = req.body.Tax_Name;
    tax.Tax_Percentage = req.body.Tax_Percentage;

    tax.Status = req.body.Status;
 
    // tax.status = "open";
    tax.date = new Date()

  
    // req.body.file=req.file.url;
    // tax.file=req.body.file


    tax.save((err, doc) => {
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

module.exports.getTax=(req, res) => {
    Tax.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getTaxlId=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Tax_Name
    Tax.find({"Tax_Name":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delTax=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.Tax_Name
    console.log("tic!!!!!!!!!!! id",Tic);
    
    Tax.deleteOne({"Tax_Name":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}




// Tax_Name Tax_Percentage  Status


module.exports.updateTaxl=(req, res) => {
   
    console.log(" update",req.body)
    // req.body.file=req.file.url;

    let Ticke=req.body.Tax_Name
    Tax.update({"Tax_Name":Ticke},{$set:{ 

        "Tax_Name": req.body.Tax_Name,
        "Tax_Percentage": req.body.Tax_Percentage,
        "Status": req.body.Status,
     

    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })


}


