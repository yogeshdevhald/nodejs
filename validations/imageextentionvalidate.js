const { body } = require("express-validator");
const  imageextention = [
	body("csvfile")
    .exists({ checkFalsy: true })
    .withMessage("csvfile is required")
];
module.exports = {imageextention}