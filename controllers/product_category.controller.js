'use strict';
const categorymodel = require('./../models/product_category.model.js');
//const multer        = require('multer');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads' });
const { validationResult } = require("express-validator");
const nodemailer = require('nodemailer');

exports.findAll = function(req,res){
	categorymodel.findAll(function(err,category){
		if(err) return res.status('401').send('Something went wrong');
		return res.send(category);
	})
}

exports.insert = function(req,res){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
  }
	var data = {
		"image":req.file.filename,
		"name" :req.body.name
	}
	//var data = new categorymodel();
	// console.log(data);
	// return false;
	categorymodel.insert(data,function(err,productcategory){
		console.log("herer");
	})
}
exports.gallery = function(req,res){
	var data = req.body;
	categorymodel.gallery(data,req.files,function(err,galleryres){
		console.log("Yes");
	})
}
exports.sendmail = function(req,res){
	console.log("send mail");
	let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "thuwalyogesh721@gmail.com",
            pass: "8958yogesh"
        }
});
  
	let message = {
	    from: "yogesh89@gmail.com",
	    to: "yogesh721@yopmail.com",
	    subject: "Subject",
	    html: "<h1>Hello SMTP Email</h1>",
	    // attachments: [
	    //     {
	    //         filename: 'demo.png',
	    //         path: __dirname + '/demo.png',
	    //         cid: 'uniq-demo.png'
	    //     }
	    // ]
	}
  
	transporter.sendMail(message, function(err, info) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log(info);
	  }
	})
}
