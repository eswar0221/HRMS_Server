const mongoose = require('mongoose');

var EstimatesSchema = new mongoose.Schema({
    
    // Estimate_ID  Client Project
    // Client_Address: 
    // Billing_Address: 
    // Estimate_Date: 
    // Expiry_Date: 
    // email: 
    // vat: 
    // itemname: ""
    // itemquan: ""
    // itemcost: ""
    // price: ""
    // subtotal: null
    // vatper: null
    // total: null
    // payment
    // status
    
    Estimate_ID: {
        type: String,
        index: {unique: true},
        
    },
    Client: {
        type: String,
        
    },
    Project: {
        type: String,
      
    },
    Client_Address: {
        type: String,
       
    },
    Billing_Address: {
        type: String,  
    },
    Estimate_Date: {
        type: String,
       
    },
    Expiry_Date: {
        type: String,     
    },
    email: {
        type: String,
    },
    vat: {
        type: String, 
    },
    // products:[{
    // itemquan_0: {
    //     type: String
    // },
    // itemname_0: {
    //     type: String
    // }, 
    // itemcost_0: {
    //     type: String
    // },
    // price_0: {
    //     type: String
    // },
    // itemquan_1: {
    //     type: String
    // },
    // itemname_1: {
    //     type: String
    // }, 
    // itemcost_1: {
    //     type: String
    // },
    // price_1: {
    //     type: String
    // },
    // itemquan_2: {
    //     type: String
    // },
    // itemname_2: {
    //     type: String
    // }, 
    // itemcost_2: {
    //     type: String
    // },
    // price_2: {
    //     type: String
    // },
    // Product:[{
        // itemname: {
        //     type: String
        // }, 
        // itemcost: {
        //     type: String
        // },
        // itemquan: {
        //     type: String
        // },
        // price: {
        //     type: String
        // },  
    // }],
    itemcost: {
        type: String
    }, 
itemname: {
    type: String
}, 
itemquan:  {
    type: String
}, 
price:  {
    type: String
}, 
    subtotal: {
        type: Number
    }, 
    vatper: {
        type: Number
    },
    total: {
        type: Number
    },
    // payment: {
    //     type: String
    // },
    status: {
        type: String
    },
    // paymentbank: {
    //     type: String
    // },
    // comments: {
    //     type: String
    // },
    date: {
        type: String
    }
});
mongoose.model('Estimates', EstimatesSchema);
