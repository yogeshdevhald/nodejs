const { body,check } = require("express-validator");
const { extname } = require('path');
const array_of_allowed_files = ['csv'];
/*For data validation in insert data*/
const csvValidation = [
  check("csvfile")
    .custom((value, { req }) => {
        if (!req.file) throw new Error("Image is required");
        if((!(extname(req.file.originalname) == '.csv'))  ) throw new Error("Please upload csv file.");
        return true
    })
];
module.exports = {
  csvValidation
};