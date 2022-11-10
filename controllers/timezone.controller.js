 'use strict';
 var timezone = require('./../models/timezone.model.js');
 const { validationResult } = require("express-validator");

 exports.findAll = function(req,res)
 {
 	timezone.findAll(function(err,timezoneres){
 		if(err) return res.status(401).send('Something went wrong.');
		if(timezoneres == "") return res.status(200).send('Data not found.');
		res.send(timezoneres);
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
 	timezone.insert(data,function(err,timezoneres){
 		if(err) return res.status(401).send('Something went wrong.');
		if(timezoneres == "") return res.status(200).send('Data not found.');
		res.send(timezoneres);
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
 	timezone.edit(data,function(err,timezoneres){
 		if(err) return res.status(401).send('Something went wrong.');
		if(timezoneres == "") return res.status(200).send('Data not found.');
		res.send(timezoneres);
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
 	timezone.update(data,function(err,timezoneres){
 		if(err) return res.status(401).send('Something went wrong.');
		if(timezoneres == "") return res.status(200).send('Data not found.');
		res.send(timezoneres);
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
 	timezone.delete(data,function(err,timezoneres){
 		if(err) return res.status(401).send('Something went wrong.');
		if(timezoneres == "") return res.status(200).send('Data not found.');
		res.send(timezoneres);
 	})
  }