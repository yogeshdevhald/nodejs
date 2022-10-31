const { body } = require("express-validator");
const  addsizevalidate = [
  body("size_name")
    .exists({ checkFalsy: true })
    .withMessage("size_name is required"),
  body("sort_order")
    .exists({ checkFalsy: true })
    .withMessage("sort order is required"),
];

const  editdeletesizevalidate = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow.")
  
];
const  updatesizevalidate = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("size_name")
    .exists({ checkFalsy: true })
    .withMessage("size name numbers allow."),
  body("sort_order")
    .exists({ checkFalsy: true })
    .withMessage("sort order is required"),
];
module.exports = {
	addsizevalidate,
	editdeletesizevalidate,
	updatesizevalidate
}