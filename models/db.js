const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');
require('./register.model');
require('./addleaverequest.model')
require('./createproject.model')
require('./createclient.model')
require('./tickets.model')
require('./client.model')
require('./contact.model')
require('./usercreate.model')
require('./Department.model')
require('./holidays.model')
require('./Designations.model')
require('./Assets.model')
require('./Jobs.model')
require('./Apply_Job.model')
require('./Empsalary.model')
require('./addtimingsheet.model')
require('./Estimates.model')
require('./Tax.model')
require('./PF.model')
require('./Expenses.model')
require('./events.model')
require('./manregister.model')
require('./dummy.model')
require('./Hrman.model')
require('./Emp_Per.model')
require('./Hrman_per.model')
require('./Tasks.model')
require('./Emp_Bank.model')
require('./resertoken.model')

