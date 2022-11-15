'use strict'
const login = require('./../models/login.model.js');

exports.login = function(req,res)
{
	var data = req.body;
	login.signin(data,function(err,loginres){
		if(err) return res.status('401').send('username and password not found.');
		res.send(loginres);
	})
}