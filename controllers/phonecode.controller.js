'use strict';
var Phonecode   = require ('./../models/phonecode.model.js');
const { validationResult } = require("express-validator");
exports.findAll = function(req,res)
{
	Phonecode.findAll(function(err,phoneres){
		if(err) return res.status(401).send('Something went wrong.');
		if(phoneres == "") return res.status(200).send('Data not found.');
		res.send(phoneres);
	})
}
exports.insert  = function(req,res)
{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
	var data = req.body;
	Phonecode.insert(data,function(err,phoneres){
		if(err) return res.status(401).send('Something went wrong.');
		if(phoneres == "") return res.status(200).send('Data not found.');
		res.send(phoneres);
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
	var id = req.body.id;
	Phonecode.edit(id,function(err,phoneres){
		if(err) return res.status(401).send('Something went wrong.');
		if(phoneres == "") return res.status(200).send('Data not found.');
		res.send(phoneres);
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
	Phonecode.update(data,function(err,phoneres){
		if(err) return res.status(401).send('Something went wrong.');
		if(phoneres == "") return res.status(200).send('Data not found.');
		res.send(phoneres);
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
	var id = req.body.id;
	Phonecode.delete(id,function(err,phoneres){
		if(err) return res.status(401).send('Something went wrong.');
		if(phoneres == "") return res.status(200).send('Data not found.');
		res.send(phoneres);
	})
}