'use strict';
var Phonecode   = require ('./../models/phonecode.model.js');
exports.insert = function(req,res)
{
	var data = req.body;
	Phonecode.insert(data,function(err,phoneres){
		if(err) return res.status(401).send('Something went wrong.');
		if(phoneres == "") return res.status(200).send('Data not found.');
		res.send(phoneres);
	})
}