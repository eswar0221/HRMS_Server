const express = require('express');
const router = express.Router();

//importing cloudinary and config
const cloudinary=require('cloudinary');
cloudinary.config({
    cloud_name:'scls',
    api_key:'244319535524477',
    api_secret:'qKkTQqGIYEzHpnB4ijfsEIhy-Zc'
})

//importing multer storage
const storage=require('multer-storage-cloudinary');
var cloudstorage=storage({
    cloudinary:cloudinary,
    folder:'movie',
    allowedFormats:['jpg','png'],
    filename:function(req,file,cb){
        cb(undefined,file.fieldname+'_'+Date.now())
    }
})

//importing & configmulter
const multer=require('multer');

var upload=multer({storage:cloudstorage});



const ctrlUser = require('../controllers/user.controller');

const ctrlReg = require('../controllers/register.controller');

const ctrlLeave = require('../controllers/addleaverequest.controller');

const ctrlCreateProject = require('../controllers/createproject.controller');
const ctrlCreateClient = require('../controllers/createclient.controller');
const ctrlTickets = require('../controllers/createtickets.controller');
const ctrluserscctrlclient=require('../controllers/client.controller');
const ctrlcontact=require('../controllers/contact.controller');
const ctrlusersc=require('../controllers/usercreate.contrioller');
const ctrlclient=require('../controllers/client.controller')
const ctrlDepartment=require('../controllers/department.controller')
const ctrlholidays=require('../controllers/holidays.controller')
const ctrlDesignations=require('../controllers/Designations.controller')
const ctrlAssets=require('../controllers/Assets.controller')
const ctrlJobsadds=require('../controllers/Jobs.controller')
const ctrlSendJob=require('../controllers/Apply_Job.controll')
const ctrlEmpsal=require('../controllers/Empsalary.controller')
const ctrltimingreg=require('../controllers/addtimingsheet.controller')
const ctrlEstimartes=require('../controllers/Estimates.controller')
const ctrlTax=require('../controllers/Tax.controller')
const ctrlPF=require('../controllers/PF.controller')
const ctrlExpenses=require('../controllers/Expenses.controller')
const ctrlevents = require('../controllers/events.controller')
const ctrlmanreg=require('../controllers/manregister.controller')
const ctrlregdsalary=require('../controllers/dummy.controller')
const ctrlHrMan=require('../controllers/Hrman.controller')  
 const   ctrlEmpper=require('../controllers/Emp_Per.controller')
 const ctrlHrmanper=require('../controllers/Hrman_per.controller')
const ctrlTasks=require('../controllers/Tasks.controller')
const ctrlEmp_Bank=require('../controllers/Emp_Bank.controller')
// regdsalary
router.post('/regdsalary', ctrlregdsalary.regdsalary);

// hrmanreg  hrlogin  gethrman  gethmbyid gethmByname  delhremployee  updatehrman

router.post('/hrmanreg', upload.single('file'), ctrlHrMan.hrmanreg);
router.get('/gethrman',ctrlHrMan.gethrman);
router.post('/gethmbyid',ctrlHrMan.gethmbyid)
router.post('/gethmByname',ctrlHrMan.gethmByname)
router.put('/updatehrpass',ctrlHrMan.updatehrpass)

// router.post('/getEmpByname',ctrlHrMan.getEmpByname)


router.post('/gethmname',ctrlHrMan.gethmname)
router.put('/updatehrmanLeaves_cas', ctrlHrMan.updatehrmanLeaves_cas);  
router.put('/updatehrmanLeaves_med', ctrlHrMan.updatehrmanLeaves_med);  
router.put('/updatehrman', ctrlHrMan.updatehrman);
router.post('/delhremployee',ctrlHrMan.delhremployee);
router.post('/hrlogin', ctrlHrMan.hrlogin);

//   Empperupdate   getEmpper  EmpPerreg
router.put('/Empperupdate', ctrlEmpper.Empperupdate);
router.post('/EmpPerreg', ctrlEmpper.EmpPerreg);
router.get('/getEmpper',ctrlEmpper.getEmpper);
 
//   hmperupdate   gethmper  hmPerreg
router.put('/hmperupdate', ctrlHrmanper.hmperupdate);
router.post('/hmPerreg', ctrlHrmanper.hmPerreg);
router.get('/gethmper',ctrlHrmanper.gethmper);

// AddTasks updateTask    gettasks  delTasks   getTaskID   getTaskEmail
router.post('/AddTasks', ctrlTasks.AddTasks);
router.get('/gettasks',ctrlTasks.gettasks);
router.post('/getTaskID',ctrlTasks.getTaskID)
router.put('/updateTask', ctrlTasks.updateTask);
router.post('/delTasks',ctrlTasks.delTasks);
router.post('/getTaskEmail',ctrlTasks.getTaskEmail);


//  Emp_Bank Details
// getempbankId delempbank updateempbank  getempbank  Addempbank   getempbankemail
router.post('/Addempbank', ctrlEmp_Bank.Addempbank);
router.get('/getempbank',ctrlEmp_Bank.getempbank);
router.post('/getempbankId',ctrlEmp_Bank.getempbankId)
router.put('/updateempbank', ctrlEmp_Bank.updateempbank);
router.post('/delempbank',ctrlEmp_Bank.delempbank);
router.post('/getempbankemail',ctrlEmp_Bank.getempbankemail);

router.post('/getempbankName',ctrlEmp_Bank.getempbankName);


// modifydata  getmempbyname delmemployee getmempbyid Manregister Mlogin getmemployees
router.post('/Manregister', ctrlmanreg.Manregister);
router.get('/getmemployees',ctrlmanreg.getmemployees);
router.post('/getmempbyid',ctrlmanreg.getmempbyid)
router.put('/modifydata', ctrlmanreg.modifydata);
router.post('/delmemployee',ctrlmanreg.delmemployee);
router.post('/Mlogin', ctrlmanreg.Mlogin);
// router.post('/getmempbyname',ctrlmanreg.getmempbyname)

router.put('/updatepass', ctrlmanreg.updatepass);


// Events

router.post('/postevent',ctrlevents.postevent)
router.get('/getevent',ctrlevents.getevent)



//  Clients
router.post('/clientreg', ctrlclient.clientreg);
router.get('/getclients',ctrlclient.getclients);
router.post('/getClientId',ctrlclient.getClientId)
router.put('/updateclent', ctrlclient.updateclent);
router.post('/delclientid',ctrlclient.delclientid);

//   RegExpenses getExpenses getExpensesno updateExpenses delExpenses
//   router.post('/RegExpenses', ctrlExpenses.RegExpenses);
router.post('/RegExpenses',upload.single('file'), ctrlExpenses.RegExpenses);


router.get('/getExpenses',ctrlExpenses.getExpenses);
router.post('/getExpensesno',ctrlExpenses.getExpensesno)
router.post('/getExpenses_ID',ctrlExpenses.getExpenses_ID)

router.post('/getExpensesEMAIL',ctrlExpenses.getExpensesEMAIL)


router.put('/updateExpenses', upload.single('file'), ctrlExpenses.updateExpenses);
router.post('/delExpenses',ctrlExpenses.delExpenses);



  // getPFId delPF updatePF  getPF  AddPF
  router.post('/AddPF', ctrlPF.AddPF);
  router.get('/getPF',ctrlPF.getPF);
  router.post('/getPFId',ctrlPF.getPFId)
  router.put('/updatePF', ctrlPF.updatePF);
  router.post('/delPF',ctrlPF.delPF);

// Emp Salary
router.post('/Addempsal', ctrlEmpsal.Addempsal);
router.get('/getempsal',ctrlEmpsal.getempsal);
router.post('/getempsalId',ctrlEmpsal.getempsalId)
router.put('/updateempsal', ctrlEmpsal.updateempsal);
router.post('/delempsal',ctrlEmpsal.delempsal);

// Estimartes
router.post('/RegEstimates', ctrlEstimartes.RegEstimates);
router.get('/getEstimartes',ctrlEstimartes.getEstimartes);
router.post('/getEstimartesID',ctrlEstimartes.getEstimartesID)
router.put('/updateEstimartes', ctrlEstimartes.updateEstimartes);
router.post('/delEstimartes',ctrlEstimartes.delEstimartes);
router.post('/findestimates',ctrlEstimartes.findestimates);

// Taxadd getTax  updateTaxl delTax getTaxlId

router.post('/Taxadd', ctrlTax.Taxadd);
router.get('/getTax',ctrlTax.getTax);
router.post('/getTaxlId',ctrlTax.getTaxlId)
router.put('/updateTaxl', ctrlTax.updateTaxl);
router.post('/delTax',ctrlTax.delTax);








// Assets
router.post('/RegAssets', ctrlAssets.RegAssets);
router.get('/getAssetsdata',ctrlAssets.getAssetsdata);
router.post('/getAssetsno',ctrlAssets.getAssetsno)
router.put('/updateAssets', ctrlAssets.updateAssets);
router.post('/delAssets',ctrlAssets.delAssets)


// JOBS
router.post('/jobsadd', ctrlJobsadds.jobsadd);
router.get('/getjobsdata',ctrlJobsadds.getjobsdata);
router.post('/getjobsno',ctrlJobsadds.getjobsno)
router.put('/updatejobs', ctrlJobsadds.updatejobs);
router.post('/deljobs',ctrlJobsadds.deljobs)




router.post('/userregi', ctrlusersc.userregi);
router.get('/getuser',ctrlusersc.getuser);
router.post('/getuserid',ctrlusersc.getuserid)
router.put('/updateuser', ctrlusersc.updateuser);
router.post('/deluserid',ctrlusersc.deluserid)


// Department
router.post('/regDepartment', ctrlDepartment.regDepartment);
router.get('/getDepartment',ctrlDepartment.getDepartment);
router.post('/getDepartmentid',ctrlDepartment.getDepartmentid)
router.put('/updateDepartment', ctrlDepartment.updateDepartment);
router.post('/delDepartment',ctrlDepartment.delDepartment)

//HOLIDAYS

router.post('/Regholidays', ctrlholidays.Regholidays);
router.get('/getholidaysdata',ctrlholidays.getholidaysdata);
router.post('/getholidaysno',ctrlholidays.getholidaysno)
router.put('/updateholidays', ctrlholidays.updateholidays);
router.post('/delholidays',ctrlholidays.delholidays)

// Designations 

router.post('/RegDesignations', ctrlDesignations.RegDesignations);
router.get('/getDesignationsdata',ctrlDesignations.getDesignationsdata);
router.post('/getDesignationsno',ctrlDesignations.getDesignationsno)
router.put('/updateDesignations', ctrlDesignations.updateDesignations);
router.post('/delDesignations',ctrlDesignations.delDesignations)

// Send Job Application Details
// sendjobApp
router.post('/sendjobApp',upload.single('file'), ctrlSendJob.sendjobApp);
// getSendapplyJobdata
router.get('/getSendapplyJobdata', ctrlSendJob.getSendapplyJobdata);  
// getSendapplyJobno
router.post('/getSendapplyJobno',ctrlSendJob.getSendapplyJobno)







// contact
router.post('/Regcontact',upload.single('file'), ctrlcontact.Regcontact);
// getcontactdata
router.get('/getcontactdata', ctrlcontact.getcontactdata);  
// getcontactno
router.post('/getcontactno',ctrlcontact.getcontactno)
// delphone
router.post('/delphone',ctrlcontact.delphone)
// updatecontact
router.put('/updatecontact',upload.single('file'), ctrlcontact.updatecontact);




router.post('/register',upload.single('file'), ctrlReg.register);

router.post('/login', ctrlReg.login);
router.get('/getemployees', ctrlReg.getemployees);  

// router.get('/getempbyid/:id', ctrlReg.getempbyid);  
router.post('/getempbyid',ctrlReg.getempbyid)

router.post('/getEmpByname',ctrlReg.getEmpByname)

router.post('/getEmpname',ctrlReg.getEmpname)
router.put('/updatemppass',ctrlReg.updatemppass)



router.put('/modifyempdata', ctrlReg.modifyempdata);  

router.put('/updateEmpLeaves_cas', ctrlReg.updateEmpLeaves_cas);  
router.put('/updateEmpLeaves_med', ctrlReg.updateEmpLeaves_med);  


//leave data
router.post('/addleave', ctrlLeave.addleave);
router.get('/getleavedata', ctrlLeave.getleavedata);
// getleaveid
router.post('/getleaveId',ctrlLeave.getleaveId);
router.post('/getMonYearLeav',ctrlLeave.getMonYearLeav);


// delleave
router.post('/delleaveid',ctrlLeave.delleaveid);
// updateleave
router.put('/updateleve', ctrlLeave.updateleve);
// getleaveemail

router.post('/getleaveemail',ctrlLeave.getleaveemail);








router.put('/addleavestoemp', ctrlReg.addleavestoemp); 
router.post('/delemployee',ctrlReg.delemployee)


//projects
router.post('/projectadd',upload.single('file'), ctrlCreateProject.projectadd);
router.get('/getProjectData', ctrlCreateProject.getProjectData); 
router.put('/updateproject',upload.single('file'), ctrlCreateProject.updateproject);
router.post('/getprojecid', ctrlCreateProject.getprojecid); 
router.post('/delproject', ctrlCreateProject.delproject); 

router.post('/getprojecname', ctrlCreateProject.getprojecname); 

//client data

// router.post('/createproject',upload.single('file'), ctrlCreateProject.createproject);


//Add Timing Sheet
router.post('/addtimingreg', ctrltimingreg.addtimingreg);
router.get('/getaddtimings',ctrltimingreg.getaddtimings);
router.post('/getaddtimingsID',ctrltimingreg.getaddtimingsID)
router.put('/updateaddtimings', ctrltimingreg.updateaddtimings);
router.post('/deladdtimings',ctrltimingreg.deladdtimings)


// 






//tickets data  
router.post('/createTickets',upload.single('file'), ctrlTickets.createTickets);
router.post('/getticketid',ctrlTickets.getticketid)
router.post('/getTicketemial',ctrlTickets.getTicketemial)


router.get('/gettickets',ctrlTickets.gettickets)
router.post('/delticketid',ctrlTickets.delticketid)
router.put('/updateticket',upload.single('file'), ctrlTickets.updateticket);


module.exports = router;



