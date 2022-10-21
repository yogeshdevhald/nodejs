'use strict';
var setting = require('./../models/setting.model.js');
exports.findAll = function(req,res)
{
	setting.findAll(function(err,settingres){
		if(err) return res.status('401').send('Data not found')
		return res.status('200').send(settingres)
	})
}
exports.insert = function(req,res)
{
	var data = req.body;
	setting.insert(data,function(err,settingres){
		if(err) return res.status('401').send('Data not found')
		return res.status('200').send(settingres)
	})
}
exports.edit = function(req,res)
{
	var data = req.body.id;
	setting.edit(data,function(err,settingres){
		if(err) return res.status('401').send('Data not found')
		return res.status('200').send(settingres)
	})
}
exports.update = function(req,res)
{
	var data = req.body;
	setting.update(data,function(err,settingres){
		if(err) return res.status('401').send('Data not found')
		return res.status('200').send(settingres)
	})
}
exports.delete = function(req,res)
{
	var data = req.body.id;
	setting.delete(data, function(err,settingres){
		if(err) return res.status('401').send('Data not found')
		return res.status('200').send(settingres)
	})
}