'use strict'
var country = require('./../models/country.model.js');
const { validationResult } = require("express-validator");
exports.findAll = function(req,res){
	country.findAll(function(err,countryres){
		if(err) return res.status(401).send('Something went wrong.');
		if(countryres == "") return res.status(200).send('Data not found.');
		res.send(countryres);
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
	country.insert(data,function(err,countryres){
		if(err) return res.status(401).send('Something went wrong.');
		if(countryres == "") return res.status(200).send('Data not found.');
		res.send(countryres);
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
	country.edit(data,function(err,countryres){
		if(err) return res.status(401).send('Something went wrong.');
		if(countryres == "") return res.status(200).send('Data not found.');
		res.send(countryres);
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
	country.update(data,function(err,countryres){
		if(err) return res.status(401).send('Something went wrong.');
		if(countryres == "") return res.status(200).send('Data not found.');
		res.send(countryres);
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
	var data   =   req.body.id;
	country.delete(data,function(err,countryres){
		if(err) return res.status(401).send('Something went wrong.');
		if(countryres == "") return res.status(200).send('Data not found.');
		res.send(countryres);
	})
}