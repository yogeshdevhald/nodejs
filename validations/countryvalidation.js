const { body } = require("express-validator");
const  addcountryvalidate = [
  body("country_print")
    .exists({ checkFalsy: true })
    .withMessage("country print is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("currency")
    .exists({ checkFalsy: true })
    .withMessage("currency is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),  
  body("vat")
    .exists({ checkFalsy: true })
    .withMessage("vat is required"), 
  body("product_id")
    .exists({ checkFalsy: true })
    .withMessage("product id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),  
  body("product_id_gift")
    .exists({ checkFalsy: true })
    .withMessage("product id gift is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),  
  body("visible_in_reg")
    .exists({ checkFalsy: true })
    .withMessage("visible in reg is required"),  
    
];

const  editdeletecountryvalidate = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),    
];
const  updatecountryvalidate = [
  body("country_print")
    .exists({ checkFalsy: true })
    .withMessage("country print is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("currency")
    .exists({ checkFalsy: true })
    .withMessage("currency is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),  
  body("vat")
    .exists({ checkFalsy: true })
    .withMessage("vat is required"), 
  body("product_id")
    .exists({ checkFalsy: true })
    .withMessage("product id is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),  
  body("product_id_gift")
    .exists({ checkFalsy: true })
    .withMessage("product id gift is required")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),  
  body("visible_in_reg")
    .exists({ checkFalsy: true })
    .withMessage("visible in reg is required"),  
    
];
module.exports = {
	addcountryvalidate,
	editdeletecountryvalidate,
	updatecountryvalidate
}