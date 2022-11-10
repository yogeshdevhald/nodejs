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
  body("groups")
  .exists({checkFalsy: true})
  .withMessage("Groups is required."),
  body("date")
  .exists({checkFalsy: true})
  .withMessage("date is required.")
  .toDate()
  .withMessage("Date must be valid format."),
  body("firstname")
  .exists({checkFalsy: true})
  .withMessage("First name is required."),
  body("lastname")
  .exists({checkFalsy: true})
  .withMessage("Last name is required."),
  body("address1")
  .exists({checkFalsy: true})
  .withMessage("Address  is required."),
  body("city")
  .exists({checkFalsy: true})
  .withMessage("city  is required."),
  body("state")
  .exists({checkFalsy: true})
  .withMessage("state  is required."),
  body("zip")
  .exists({checkFalsy: true})
  .withMessage("zip  is required."),
  body("country")
  .exists({checkFalsy: true})
  .withMessage("country  is required."),
  body("phone")
  .exists({checkFalsy: true})
  .withMessage("phone  is required."),
  body("email")
  .exists({checkFalsy: true})
  .withMessage("email  is required."),
   body("c1")
  .exists({checkFalsy: true})
  .withMessage("c1  is required."),
   body("c2")
  .exists({checkFalsy: true})
  .withMessage("c2  is required."),
   body("c3")
  .exists({checkFalsy: true})
  .withMessage("c3  is required."),
   body("c4")
  .exists({checkFalsy: true})
  .withMessage("c4  is required."),
   body("date")
  .exists({checkFalsy: true})
  .withMessage("date  is required."),
   body("username")
  .exists({checkFalsy: true})
  .withMessage("user name  is required."),
   body("type")
  .exists({checkFalsy: true})
  .withMessage("type  is required."),
  body("result")
  .exists({checkFalsy: true})
  .withMessage("result  is required."),
  body("details")
  .exists({checkFalsy: true})
  .withMessage("details  is required."),
  body("date")
  .exists({checkFalsy: true})
  .withMessage("date  is required."),
  body("next_renew")
  .exists({checkFalsy: true})
  .withMessage("next renew  is required."),
  body("price")
  .exists({checkFalsy: true})
  .withMessage("price  is required."),
   body("card_id")
  .exists({checkFalsy: true})
  .withMessage("card id  is required."),
   body("retry")
  .exists({checkFalsy: true})
  .withMessage("retry  is required."),
   body("username")
  .exists({checkFalsy: true})
  .withMessage("user name  is required."),
   body("product")
  .exists({checkFalsy: true})
  .withMessage("product  is required."),
   body("status")
  .exists({checkFalsy: true})
  .withMessage("status  is required."),
  body("expire")
  .exists({checkFalsy: true})
  .withMessage("expire  is required."),
  body("cancel")
  .exists({checkFalsy: true})
  .withMessage("cancel  is required."),
  body("order")
  .exists({checkFalsy: true})
  .withMessage("order  is required."),
  body("first_name")
  .exists({checkFalsy: true})
  .withMessage("first name  is required."),
  body("last_name")
  .exists({checkFalsy: true})
  .withMessage("last name  is required."),
  body("address1")
  .exists({checkFalsy: true})
  .withMessage("address1  is required."),
  body("country")
  .exists({checkFalsy: true})
  .withMessage("country  is required."),
  body("directions")
  .exists({checkFalsy: true})
  .withMessage("directions  is required."),
  body("shipped")
  .exists({checkFalsy: true})
  .withMessage("shipped  is required."),
  body("reg_temp_code")
  .exists({checkFalsy: true})
  .withMessage("reg temp code  is required."),
  body("joined")
  .exists({checkFalsy: true})
  .withMessage("joined  is required."),
  body("expires")
  .exists({checkFalsy: true})
  .withMessage("expires  is required."),
  body("logins")
  .exists({checkFalsy: true})
  .withMessage("logins  is required."),
  body("last_login")
  .exists({checkFalsy: true})
  .withMessage("last login  is required."),
  body("last_update")
  .exists({checkFalsy: true})
  .withMessage("last update  is required."),
  body("renew_date")
  .exists({checkFalsy: true})
  .withMessage("renew date  is required."),
  body("activated")
  .exists({checkFalsy: true})
  .withMessage("activated  is required."),
  body("activate_type")
  .exists({checkFalsy: true})
  .withMessage("activate type  is required."),
  body("status")
  .exists({checkFalsy: true})
  .withMessage("status  is required."),
  body("lead")
  .exists({checkFalsy: true})
  .withMessage("lead  is required."),
  body("trial")
  .exists({checkFalsy: true})
  .withMessage("trial  is required."),
  body("start_page")
  .exists({checkFalsy: true})
  .withMessage("start page  is required."),
  body("trackstat")
  .exists({checkFalsy: true})
  .withMessage("trackstat  is required."),
  body("reg_page")
  .exists({checkFalsy: true})
  .withMessage("reg_page  is required."),
  body("added_by")
  .exists({checkFalsy: true})
  .withMessage("added_by  is required."),
   body("flag_exempt")
  .exists({checkFalsy: true})
  .withMessage("flag_exempt  is required."),
   body("ip")
  .exists({checkFalsy: true})
  .withMessage("ip  is required."),
   body("order_id")
  .exists({checkFalsy: true})
  .withMessage("order_id  is required."),
   body("total_concurrent")
  .exists({checkFalsy: true})
  .withMessage("total_concurrent  is required."),
   body("product_id")
  .exists({checkFalsy: true})
  .withMessage("product_id  is required."),
  body("login_attempts")
  .exists({checkFalsy: true})
  .withMessage("login attempts  is required."),
  body("locked_until")
  .exists({checkFalsy: true})
  .withMessage("locked until  is required."),
  body("max_logins")
  .exists({checkFalsy: true})
  .withMessage("max logins  is required."),
  body("concurrent_login_notices")
  .exists({checkFalsy: true})
  .withMessage("concurrent login notices  is required."),
  body("concurrent_login_date")
  .exists({checkFalsy: true})
  .withMessage("concurrent login date  is required."),
  body("email_optout")
  .exists({checkFalsy: true})
  .withMessage("email optout  is required."),
  body("updated")
  .exists({checkFalsy: true})
  .withMessage("updated  is required."),
  body("n1")
  .exists({checkFalsy: true})
  .withMessage("n1  is required."),
  body("nP1")
  .exists({checkFalsy: true})
  .withMessage("nP1  is required."),
  body("nD1")
  .exists({checkFalsy: true})
  .withMessage("nD1  is required."),
  body("coupon_type")
  .exists({checkFalsy: true})
  .withMessage("coupon_type  is required."),
  body("role_id")
  .exists({checkFalsy: true})
  .withMessage("role id  is required."),
  body("remember_token")
  .exists({checkFalsy: true})
  .withMessage("remember token  is required."),
  body("reg_temp_code")
  .exists({checkFalsy: true})
  .withMessage("reg temp code  is required."),
  body("full_name")
  .exists({checkFalsy: true})
  .withMessage("full name  is required."),
  body("address")
  .exists({checkFalsy: true})
  .withMessage("address  is required."),
   body("size")
  .exists({checkFalsy: true})
  .withMessage("size  is required."),
   body("date_of_birth")
  .exists({checkFalsy: true})
  .withMessage("date of birth  is required."),
   body("gateway")
  .exists({checkFalsy: true})
  .withMessage("gateway  is required."),
   body("shipping_type")
  .exists({checkFalsy: true})
  .withMessage("shipping_type  is required."),
];
/*For data validation in edit data*/
// const userEditDataValidation = [
//   body("id")
//   .exists({ checkFalsy: true })
//   .withMessage("Id is required."),
// ];
/*For data validation in update data*/
// const userUpdateDataValidation = [
//   body("username")
//     .exists({ checkFalsy: true })
//     .withMessage("User name is required.")
//     .isString()
//     .withMessage("User name should be string.")
//     .matches(/^[A-Za-z\s]+$/)
//     .withMessage('Name must be alphabetic.'),
//   body("email").optional().isEmail().withMessage("Provide valid email."),
//   body("status")
//     .exists({ checkFalsy: true })
//     .withMessage("status is required.")
//     .isNumeric()
//     .withMessage("Only numeric numbers allow."),
//   body("password")
//     .isLength({ min: 8 })
//     .withMessage("Minimum 8 digit is required.")
//     .isLength({ max: 16 })
//     .withMessage("Maxmimum 16 digit is required."),
//   body("expire")
//   .exists({checkFalsy: true})
//   .withMessage("Expire is required.")
//   .toDate()
//   .withMessage("Date must be valid format.")
//   .isBefore(moment().format('dd-mm-yyyy'))
//   .withMessage("Date is not less then today date."),
// ];
/*For delete data validation*/
// const deleteDataValidation = [
//   body('id')
//   .exists({checkFalsy: true})
//   .withMessage("Id is required.")
// ];
module.exports = {
  userDataValidation,
  //userEditDataValidation,
  //userUpdateDataValidation,
  //deleteDataValidation
};