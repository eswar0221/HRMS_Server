

const mongoose = require('mongoose');

const Estimates = mongoose.model('Estimates');

module.exports.RegEstimates= (req, res, next) => {
    console.log("reg Estimattes",req.body);
    
    var estimates = new Estimates();
    estimates.Estimate_ID = req.body.Estimate_ID; 
    estimates.Client = req.body.Client; 
    estimates.Project = req.body.Project;
    estimates.Client_Address = req.body.Client_Address;
    estimates.Billing_Address = req.body.Billing_Address;
    estimates.Estimate_Date = req.body.Estimate_Date;

    estimates.Expiry_Date = req.body.Expiry_Date;
    estimates.email = req.body.email;
    estimates.vat = req.body.vat;

    // var Product=[{     
        estimates.itemname=req.body.itemname,    
        estimates.itemcost=req.body.itemcost,
        estimates.itemquan=req.body.itemquan,
        estimates.price=req.body.price,    
    // }] 
// console.log("products",Product);

    // estimates.Product=Product
    // itemcost: ""
    // itemname: ""
    // itemquan: ""
    // price: ""
    estimates.subtotal = req.body.subtotal;
    estimates.vatper = req.body.vatper;
    estimates.total = req.body.total;
     // estimates.payment ="pending";
    estimates.status ="Pending";
    estimates.date = new Date()

    // estimates.itemname = req.body.itemname;
    // estimates.itemquan = req.body.itemquan;
    // estimates.itemcost = req.body.itemcost;
    // estimates.price = req.body.price;
    // estimates.itemname_0 = req.body.itemname_0;
    // estimates.itemquan_0 = req.body.itemquan_0;
    // estimates.itemcost_0 = req.body.itemcost_0;
    // estimates.price_0 = req.body.price_0;
    // estimates.itemname_1 = req.body.itemname_1;
    // estimates.itemquan_1 = req.body.itemquan_1;
    // estimates.itemcost_1 = req.body.itemcost_1;
    // estimates.price_1 = req.body.price_1;
    // estimates.itemname_2 = req.body.itemname_2;
    // estimates.itemquan_2 = req.body.itemquan_2;
    // estimates.itemcost_2 = req.body.itemcost_2;
    // estimates.price_2 = req.body.price_2;
    // estimates.itemname_3 = req.body.itemname_3;
    // estimates.itemquan_3 = req.body.itemquan_3;
    // estimates.itemcost_3 = req.body.itemcost_3;
    // estimates.price_3 = req.body.price_3;
  


    estimates.save((err, doc) => {
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

module.exports.getEstimartes=(req, res) => {
    Estimates.find(function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}
// RegEstimates delEstimartes updateEstimartes getEstimartesID getEstimartes
// 

module.exports.getEstimartesID=(req, res) => {
 
    console.log(req.body)
    let id=req.body.Estimate_ID
    Estimates.find({"Estimate_ID":id},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.delEstimartes=(req, res) => {
    console.log("del",req.body)
    
    let Tic=req.body.Estimate_ID
    console.log("tic!!!!!!!!!!! id",Tic);
    
    Estimates.deleteOne({"Estimate_ID":Tic},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports.findestimates=(req, res) => {
    console.log("del",req.body)
    let Estimate_ID=JSON.parse(JSON.stringify(req.body.Estimate_ID).replace(/"\s+|\s+"/g,'"'))
    
    // let Tic=req.body.Departments
    // console.log("tic!!!!!!!!!!! id",Tic);
    
    Estimates.find({"Estimate_ID":Estimate_ID},function(err,data) {                   
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}






module.exports.updateEstimartes=(req, res) => {
   
    console.log("update estimates",req.body)
    // req.body.file=req.file.url;

    let Ticke=req.body.Estimate_ID
    Estimates.update({"Estimate_ID":Ticke},{$set:{ 

      
        'Estimate_ID':req.body.Estimate_ID,
        "Client":req.body.Client,
        'Project':req.body.Project,
        "Client_Address":req.body.Client_Address, 
        "Billing_Address":req.body.Billing_Address, 
        "Estimate_Date":req.body.Estimate_Date,
        "Expiry_Date":req.body.Expiry_Date,
        "email":req.body.email,
        "vat":req.body.vat, 
        "status":req.body.status,
    //     "itemname": rqe.body.itemname,
    //   "itemquan": rqe.body.itemquan,
    //   "itemcost": rqe.body.itemcost,
    //   "price": rqe.body.price,
      "subtotal": req.body.subtotal,
      "vatper":req.body.vatper,
      "total":req.body.total,
    
    }},function(err,data) {                            
        if (err) {
            return console.error(err)
        }
        else{
            res.send(data)
        }
    })
}






