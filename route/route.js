const express    = require('express');
const router     = express.Router();
const controller = require('./../controllers/user.controller.js');

var con          = require('./../config/db');

var Json2csvParser =  require('json2csv').Parser;


const userinfocontroller = require('./../controllers/user_additional_info.controller.js');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads' });
const imageextentionmiddleware  = require('./../middleware/imageextentioncheck.js');
const productcategorycontroller = require('./../controllers/product_category.controller.js');
const countrycontroller   = require('./../controllers/country.controller.js');
const sizecontroller      = require('./../controllers/size.controller.js');
const settingcontroller   = require('./../controllers/setting.controller.js');
const phonecodecontroller = require('./../controllers/phonecode.controller.js');
const timezonecontroller  = require('./../controllers/timezone.controller.js');

const {csvValidation} = require("./../validations/csvValidation.js");
const {check,userDataValidation} = require("./../validations/userDataValidate.js");
const {userAdditiionalDataValidation,userAdditiionalEditDataValidation,userAdditiionalUpdateDataValidation,userAdditiionalDeleteDataValidation} = require('./../validations/userAdditionalInfoValidate.js');
const {productCategoryValidation} = require('./../validations/productCategoryValidation.js');
const {addtimezonevalidate,editdeltetimezonevalidate,updatetimezonevalidate} = require('./../validations/timezoneValidation.js');
const {addphonevalidate,editdeletephonevalidate,updatephonevalidate} = require('./../validations/phonevalidation.js');
const {addsettingvalidate,editdeletevalidate,updatesettingvalidate} = require('./../validations/settingvalidation.js');
const {addsizevalidate,editdeletesizevalidate,updatesizevalidate} = require('./../validations/sizevalidation.js');
const {addcountryvalidate,editdeletecountryvalidate,updatecountryvalidate} = require('./../validations/countryvalidation.js');
const {imageextention} = require('./../validations/imageextentionvalidate.js');

router.get('/users/all',controller.findAll);
router.post('/users/add',userDataValidation,controller.insert);
router.post('/users/edit',controller.edit);
router.post('/users/update',controller.update);
router.post('/users/delete',controller.delete);

router.get('/userinfo/all',userinfocontroller.findAll);
router.post('/userinfo/add',userAdditiionalDataValidation,userinfocontroller.insert);
router.post('/userinfo/edit',userAdditiionalEditDataValidation,userinfocontroller.edit);
router.post('/userinfo/update',userAdditiionalUpdateDataValidation,userinfocontroller.update);
router.post('/userinfo/delete',userAdditiionalDeleteDataValidation,userinfocontroller.delete);

router.get('/productcategory/all',productcategorycontroller.findAll);
/*single image upload with data*/
router.post('/productcategory/add', upload.single('img'),productCategoryValidation,productcategorycontroller.insert);
/*multiple image upload with data*/
router.post('/productcategory/image-gallery', upload.array('multi-img'), productcategorycontroller.gallery);
/*for send mail*/
router.get('/productcategory/send-mail', productcategorycontroller.sendmail);
//country route
router.get('/country/all',countrycontroller.findAll);
router.post('/country/add',addcountryvalidate,countrycontroller.insert);
router.post('/country/edit',editdeletecountryvalidate,countrycontroller.edit);
router.post('/country/update',updatecountryvalidate,countrycontroller.update);
router.post('/country/delete',editdeletecountryvalidate,countrycontroller.delete);
//size route
router.get('/size/all',sizecontroller.findAll);
router.post('/size/add',addsizevalidate,sizecontroller.insert);
router.post('/size/edit',editdeletesizevalidate,sizecontroller.edit);
router.post('/size/update',updatesizevalidate,sizecontroller.update);
router.post('/size/delete',editdeletesizevalidate,sizecontroller.delete);
//setting route
router.get('/setting/all',settingcontroller.findAll);
router.post('/setting/add',addsettingvalidate,settingcontroller.insert);
router.post('/setting/edit',editdeletevalidate,settingcontroller.edit);
router.post('/setting/update',updatesettingvalidate,settingcontroller.update);
router.post('/setting/delete',editdeletevalidate,settingcontroller.delete);
//phonecode route
router.get('/phone/all',phonecodecontroller.findAll);
router.post('/phone/add',addphonevalidate,phonecodecontroller.insert);
router.post('/phone/edit',editdeletephonevalidate,phonecodecontroller.edit);
router.post('/phone/update',updatephonevalidate,phonecodecontroller.update);
router.post('/phone/delete',editdeletephonevalidate,phonecodecontroller.delete);
//timezone
router.get('/timezone/all',timezonecontroller.findAll);
router.post('/timezone/add',addtimezonevalidate,timezonecontroller.insert);
router.post('/timezone/edit',editdeltetimezonevalidate,timezonecontroller.edit);
router.post('/timezone/update',updatetimezonevalidate,timezonecontroller.update);
router.post('/timezone/delete',editdeltetimezonevalidate,timezonecontroller.delete);
//upload csv
router.post('/uploadcsv',upload.single('csvfile'),csvValidation,controller.uploadCsv);
//donwnload csv
router.get('/downloadcsv',controller.downloadCsv);

module.exports = router;