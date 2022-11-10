'use strict'
const size = require('./../models/size.model');
const { validationResult } = require("express-validator");
exports.findAll = function(req,res)
{
	size.findAll(function(err,sizeres){
		if(err) return res.status(401).send('Something went wrong.');
		if(sizeres == "") return res.status(200).send('Data not found.');
		res.send(sizeres);
	})
}
exports.insert = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
	var data = req.body;
	size.insert(data,function(err,sizeres){
		if(err) return res.status(401).send('Something went wrong.');
		if(sizeres == "") return res.status(200).send('Data not found.');
		res.send(sizeres);
	})
}
exports.edit = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
	var data = req.body.id;
	size.edit(data,function(err,sizeres){
		if(err) return res.status(401).send('Something went wrong.');
		if(sizeres == "") return res.status(200).send('Data not found.');
		res.send(sizeres);
	})
}
exports.update = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
	var data = req.body;
	size.update(data,function(err,sizeres){
		if(err) return res.status(401).send('Something went wrong.');
		if(sizeres == "") return res.status(200).send('Data not found.');
		res.send(sizeres);
	})
}
exports.delete = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
	var data = req.body.id;
	size.delete(data,function(err,sizeres){
		if(err) return res.status(401).send('Something went wrong.');
		if(sizeres == "") return res.status(200).send('Data not found.');
		res.send(sizeres);
	})
}