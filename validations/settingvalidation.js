const { body } = require("express-validator");
const  addsettingvalidate = [
  body("key")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("display_name")
    .exists({ checkFalsy: true })
    .withMessage("display name is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("value")
    .exists({ checkFalsy: true })
    .withMessage("value is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("details")
    .exists({ checkFalsy: true })
    .withMessage("details is required"),
  body("type")
    .exists({ checkFalsy: true })
    .withMessage("type is required"),
  body("order")
    .exists({ checkFalsy: true })
    .withMessage("order is required"),
  body("group")
    .exists({ checkFalsy: true })
    .withMessage("group is required"),
];

const  editdeletevalidate = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow.")
  
];
const  updatesettingvalidate = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("key")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("display_name")
    .exists({ checkFalsy: true })
    .withMessage("display name is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("value")
    .exists({ checkFalsy: true })
    .withMessage("value is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("details")
    .exists({ checkFalsy: true })
    .withMessage("details is required"),
  body("type")
    .exists({ checkFalsy: true })
    .withMessage("type is required"),
  body("order")
    .exists({ checkFalsy: true })
    .withMessage("order is required"),
  body("group")
    .exists({ checkFalsy: true })
    .withMessage("group is required"),
];
module.exports = {
	addsettingvalidate,
	editdeletevalidate,
	updatesettingvalidate
}