'use strict';
const UserInfo       = require('./../models/user_additional_info.model.js');
const { validationResult } = require("express-validator");
exports.findAll = function(req,res){
	UserInfo.findAll(function(err,userinfo){
		if(err) return res.status(401).send('Something went wrong.');
		if(userinfo == "") return res.status(200).send('Data not found.');
		res.send(userinfo);
	})
}

exports.insert = function(req,res){
	let data     = new UserInfo(req.body);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
	UserInfo.insert(data,function(err,userinfo){
		if(err) return res.status(401).send('Something went wrong.');
		if(userinfo == "") return res.status(200).send('Data not found.');
		res.send(userinfo);
	})
}

exports.edit = function(req,res){
	let id = req.body.id;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
  }
	UserInfo.edit(id,function(err,userinfo){
		if(err) return res.status(401).send('something went wrong');
		if(userinfo == "") return res.status(401).send('Data not found.');
		res.send(userinfo);
	})
}

exports.update = function(req,res){
	let data = new UserInfo(req.body);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
	UserInfo.update(data,function(err,userinfo){
		if(userinfo.affectedRows == 0) return res.status(401).send('Data not found.');
		if(userinfo.affectedRows > 0)  return res.status(200).send('updated record successfully.');
	})
}
exports.delete = function(req,res){
	let id = req.body.id;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
	UserInfo.delete(id,function(err,userinfo){
		if(userinfo.affectedRows == 0) return res.status(200).send('Id not found.');
		if(userinfo.affectedRows > 0) return res.status(200).send('Deleted record successfully.');
	})
}