const { body } = require("express-validator");

/*For data validation in insert data*/
const userAdditiionalDataValidation = [
  body("user_id")
    .exists({ checkFalsy: true })
    .withMessage("User id name is required.")
    .isNumeric()
    .withMessage('Only numeric numbers allow.'),
  body("full_name")
    .exists({ checkFalsy: true })
    .withMessage("full name is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("full name  should be string."),
  body("size")
    .exists({ checkFalsy: true })
    .withMessage("status is required.")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("address")
    .exists({ checkFalsy: true })
    .withMessage("Address is required."),
  body("zip")
    .exists({checkFalsy: true})
    .withMessage("Zip is required.")
    .isNumeric()
    .withMessage('Only numeric numbers allow.'),
  body("city")
    .exists({checkFalsy: true})
    .withMessage("City is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("City should be string."),
  body("country")
    .exists({checkFalsy: true})
    .withMessage("Country is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Countryshould be string."),
  body("phone")
    .exists({checkFalsy: true})
    .withMessage("Phone is required.")
    .isLength({ min: 10 })
    .withMessage("Enter valid phone number")
    .isLength({ max: 10 })
    .withMessage("Enter valid phone number."),
  body("gateway")
    .exists({checkFalsy: true})
    .withMessage("Gateway is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Gateway should be string."),
  body("shipping_type")
    .exists({checkFalsy: true})
    .withMessage("Shipping type is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Shipping type be string."),
  
];

const userAdditiionalEditDataValidation = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("id name is required.")
    .isNumeric()
    .withMessage('Only numeric numbers allow.'),
];
const userAdditiionalUpdateDataValidation = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("id name is required.")
    .isNumeric()
    .withMessage('Only numeric numbers allow.'),
  body("user_id")
    .exists({ checkFalsy: true })
    .withMessage("User id name is required.")
    .isNumeric()
    .withMessage('Only numeric numbers allow.'),
  body("full_name")
    .exists({ checkFalsy: true })
    .withMessage("full name is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("full name  should be string."),
  body("size")
    .exists({ checkFalsy: true })
    .withMessage("status is required.")
    .isNumeric()
    .withMessage("Only numeric numbers allow."),
  body("address")
    .exists({ checkFalsy: true })
    .withMessage("Address is required."),
  body("zip")
    .exists({checkFalsy: true})
    .withMessage("Zip is required.")
    .isNumeric()
    .withMessage('Only numeric numbers allow.'),
  body("city")
    .exists({checkFalsy: true})
    .withMessage("City is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("City should be string."),
  body("country")
    .exists({checkFalsy: true})
    .withMessage("Country is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Countryshould be string."),
  body("phone")
    .exists({checkFalsy: true})
    .withMessage("Phone is required.")
    .isLength({ min: 10 })
    .withMessage("Enter valid phone number")
    .isLength({ max: 10 })
    .withMessage("Enter valid phone number."),
  body("gateway")
    .exists({checkFalsy: true})
    .withMessage("Gateway is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Gateway should be string."),
  body("shipping_type")
    .exists({checkFalsy: true})
    .withMessage("Shipping type is required.")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Shipping type be string."),
  
];
const userAdditiionalDeleteDataValidation = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("id name is required.")
    .isNumeric()
    .withMessage('Only numeric numbers allow.'),
];
module.exports = {
  userAdditiionalDataValidation,
  userAdditiionalEditDataValidation,
  userAdditiionalUpdateDataValidation,
  userAdditiionalDeleteDataValidation
};