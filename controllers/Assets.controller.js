

const mongoose = require('mongoose');

const Assets = mongoose.model('Assets');

module.exports.RegAssets = (req, res, next) => {
    console.log(req.body);
    
    var assets = new Assets();
    assets.AssetName = req.body.AssetName;
    assets.PurchaseDate = req.body.PurchaseDate;
    assets.Manufacturer = req.body.Manufacturer;
    assets.SerialNumber = req.body.SerialNumber;
    assets.Condition = req.body.Condition;
    assets.Value = req.body.Value;
    assets.Status = req.body.Status;
    assets.Assetid = req.body.Assetid;
    assets.WarrantyEnd = req.body.WarrantyEnd;
    assets.Model = req.body.Model;
    assets.Supplier = req.body.Supplier;
    assets.Warranty = req.body.Warranty;
    assets.Asset_User = req.body.Asset_User;
    assets.Description = req.body.Description;

    assets.date = new Date()

   


    assets.save((err, doc) => {
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

module.exports.getAssetsdata=(req, res) => {
    Assets.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.getAssetsno=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Assetid
    Assets.find({"Assetid":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delAssets=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.Assetid
    console.log("tic!!!!!!!!!!! id",Tic);
    
    Assets.deleteOne({"Assetid":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}






module.exports.updateAssets=(req, res) => {
   
    console.log(req.body)
    // req.body.file=req.file.url;

    let Tick=req.body.Assetid
    Assets.update({"Assetid":Tick},{$set:{ 

        "AssetName": req.body.AssetName,
   "PurchaseDate": req.body.PurchaseDate,
    "Manufacturer": req.body.Manufacturer,
    "SerialNumber":req.body.SerialNumber,
    "Condition": req.body.Condition,
    "Value":req.body.Value,
    "Status": req.body.Status,
    "Assetid": req.body.Assetid,
   "WarrantyEnd": req.body.WarrantyEnd,
    "Model":req.body.Model,
    "Supplier": req.body.Supplier,
    "Warranty" : req.body.Warranty,
    "Asset_User" : req.body.Asset_User,
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


