const { body } = require("express-validator");

const  addtimezonevalidate = [
  body("country_code")
    .exists({ checkFalsy: true })
    .withMessage("Country code is required"),
  body("timezones")
    .exists({ checkFalsy: true })
    .withMessage("Timezonesis required"),
  body("gmt_offset")
    .exists({ checkFalsy: true })
    .withMessage("Gmt offset is required"),
  body("dst_offset")
    .exists({ checkFalsy: true })
    .withMessage("Dst offset is required"),
  body("raw_offset")
    .exists({ checkFalsy: true })
    .withMessage("Raw offset is required")
];
const  editdeltetimezonevalidate = [
  body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required")
];
const  updatetimezonevalidate = [
   body("id")
    .exists({ checkFalsy: true })
    .withMessage("Id is required"),
  body("country_code")
    .exists({ checkFalsy: true })
    .withMessage("Country code is required"),
  body("timezones")
    .exists({ checkFalsy: true })
    .withMessage("Timezonesis required"),
  body("gmt_offset")
    .exists({ checkFalsy: true })
    .withMessage("Gmt offset is required"),
  body("dst_offset")
    .exists({ checkFalsy: true })
    .withMessage("Dst offset is required"),
  body("raw_offset")
    .exists({ checkFalsy: true })
    .withMessage("Raw offset is required")
];
module.exports = {
	addtimezonevalidate,
	editdeltetimezonevalidate,
	updatetimezonevalidate
};