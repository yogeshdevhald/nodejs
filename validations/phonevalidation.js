const { body } = require("express-validator");
const  addphonevalidate = [
  body("code")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
];
const  editdeletephonevalidate = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
];
const  updatephonevalidate = [
  body("code")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow.")
];
module.exports = {
	addphonevalidate,
	editdeletephonevalidate,
	updatephonevalidate
}