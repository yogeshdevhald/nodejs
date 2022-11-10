const { body,check } = require("express-validator");
var moment = require('moment');
moment().format('dd-mm-yyyy');
const { extname } = require('path');
const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'gif'];
/*For data validation in insert data*/
const productCategoryValidation = [
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("name is required.")
    .isString()
    .withMessage("User name should be string.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('Name must be alphabetic.'),
  check("img")
    .custom((value, { req }) => {
        if (!req.file) throw new Error("Image is required");
        if((!(extname(req.file.originalname) == '.jpg')) && (!(extname(req.file.originalname) == '.png')) && (!(extname(req.file.originalname) == '.bmp'))  ) throw new Error("Image type is not required.");
        return true
    })
];
module.exports = {
  productCategoryValidation
};