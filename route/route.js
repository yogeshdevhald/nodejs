const express    = require('express');
const router     = express.Router();
const controller = require('./../controllers/user.controller.js');
const userinfocontroller = require('./../controllers/user_additional_info.controller.js');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads' });
const productcategorycontroller = require('./../controllers/product_category.controller.js');
const countrycontroller = require('./../controllers/country.controller.js');
const sizecontroller = require('./../controllers/size.controller.js');
const settingcontroller = require('./../controllers/setting.controller.js');
const phonecodecontroller = require('./../controllers/phonecode.controller.js');

const {userDataValidation,userEditDataValidation,userUpdateDataValidation,deleteDataValidation} = require("./../validations/userDataValidate.js");
const {userAdditiionalDataValidation,userAdditiionalEditDataValidation,userAdditiionalUpdateDataValidation,userAdditiionalDeleteDataValidation} = require('./../validations/userAdditionalInfoValidate.js');
const {productCategoryValidation} = require('./../validations/productCategoryValidation.js');

router.get('/users/all',controller.findAll);
router.post('/users/add',userDataValidation,controller.insert);
router.post('/users/edit',userEditDataValidation,controller.edit);
router.post('/users/update',userUpdateDataValidation,controller.update);
router.post('/users/delete',deleteDataValidation,controller.delete);

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
router.post('/country/add',countrycontroller.insert);
router.post('/country/edit',countrycontroller.edit);
router.post('/country/update',countrycontroller.update);
router.post('/country/delete',countrycontroller.delete);
//size route
router.get('/size/all',sizecontroller.findAll);
router.post('/size/add',sizecontroller.insert);
router.post('/size/edit',sizecontroller.edit);
router.post('/size/update',sizecontroller.update);
router.post('/size/delete',sizecontroller.delete);
//setting route
router.get('/setting/all',settingcontroller.findAll);
router.post('/setting/add',settingcontroller.insert);
router.post('/setting/edit',settingcontroller.edit);
router.post('/setting/update',settingcontroller.update);
router.post('/setting/delete',settingcontroller.delete);
//phonecode route
//router.get('/phone/all',phonecodecontroller.findAll);
router.post('/phone/add',phonecodecontroller.insert);

module.exports = router;