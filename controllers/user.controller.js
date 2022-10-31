'use strict';
const User = require('./../models/user.model.js');
const { validationResult } = require("express-validator");
var moment = require('moment');
/*get all user data*/
exports.findAll = function(req,res){
	User.findAll(function(err,user){
		if(err) return res.status(401).send('Something went wrong.');
		if(user == "") return res.status(200).send('Data not found.');
		res.send(user);
	})
}
/*Create user*/
exports.insert = function(req,res){
	var userData = new User(req.body);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
  //console.log(req.body);
  //return false;
 	User.insert(userData,function(err,user){
 		if(err) return res.sendStatus(401).send('Data is not vaild.');
 		res.send(String(user));
 	})
}
 /*Edit user*/
exports.edit = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
 	User.edit(req.body.id,function(err,user){
 		if(user == "") return res.status(200).send('Data not found.');
 		if(err) return res.status(401).send('Data not founnd');
 		console.log(user);
 		res.send(user);
 	})
}
/*Update user*/
exports.update = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
  }
	let updateData = new User(req.body);
	User.update(updateData,function(err,user){
		if(err) return res.status(401).send('User not updated sucessfully.');
		res.send(user);
	})
}
/*Delete user*/
exports.delete = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
  }
	let id = req.body.id;
	User.delete(id,function(err,user){
		if(user == "") return res.status(200).send('Id not found.');
		if(err) return res.status(401).send('User not deleted.');
		res.send(user);
	})
}