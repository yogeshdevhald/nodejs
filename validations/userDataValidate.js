const { body } = require("express-validator");
var moment = require('moment');
moment().format('dd-mm-yyyy');

/*For data validation in insert data*/
const userDataValidation = [
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("User name is required.")
    .isString()
    .withMessage("User name should be string.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('Name must be alphabetic.'),
  body("email").optional().isEmail().withMessage("Provide valid email."),
  body("status")
    .exists({ checkFalsy: true })
    .withMessage("status is required.")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required.")
    .isLength({ min: 8 })
    .withMessage("Minimum 8 digit is required.")
    .isLength({ max: 16 })
    .withMessage("Maxmimum 16 digit is required."),
  body("expire")
  .exists({checkFalsy: true})
  .withMessage("Expire is required.")
  .toDate()
  .withMessage("Date must be valid format.")
  .isAfter(moment().format("YYYY-MM-DD[T]HH:mm:ss"))
  .withMessage("Date is not less then today date."),
];
/*For data validation in edit data*/
const userEditDataValidation = [
  body("id")
  .exists({ checkFalsy: true })
  .withMessage("Id is required."),
];
/*For data validation in update data*/
const userUpdateDataValidation = [
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("User name is required.")
    .isString()
    .withMessage("User name should be string.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('Name must be alphabetic.'),
  body("email").optional().isEmail().withMessage("Provide valid email."),
  body("status")
    .exists({ checkFalsy: true })
    .withMessage("status is required.")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Minimum 8 digit is required.")
    .isLength({ max: 16 })
    .withMessage("Maxmimum 16 digit is required."),
  body("expire")
  .exists({checkFalsy: true})
  .withMessage("Expire is required.")
  .toDate()
  .withMessage("Date must be valid format.")
  .isBefore(moment().format('dd-mm-yyyy'))
  .withMessage("Date is not less then today date."),
];
/*For delete data validation*/
const deleteDataValidation = [
  body('id')
  .exists({checkFalsy: true})
  .withMessage("Id is required.")
];
module.exports = {
  userDataValidation,
  userEditDataValidation,
  userUpdateDataValidation,
  deleteDataValidation
};