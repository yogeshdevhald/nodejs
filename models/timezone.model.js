 'use strict';
 var con = require('./../config/db.js');
 var timezone = function(timezone)
 {
 	this.id = timezone.id;
 	this.country_code = timezone.country_code;
 	this.timezones    = timezone.timezones;
 	this.gmt_offset   = timezone.gmt_offset;
 	this.dst_offset   = timezone.dst_offset;
 	this.raw_offset   = timezone.raw_offset;
 }
 timezone.findAll = function(result)
 {
 	let sql = "select * from timezones";
 	con.query(sql,function(err,rows,field){
 		if(err) return result(err,null);
 		return result(null,rows)
 	})
 }
 timezone.insert = function(data,result)
 {
 	var data = [data.country_code,data.timezones,data.gmt_offset,data.dst_offset,data.raw_offset];
 	let sql = "INSERT INTO `timezones`(`country_code`, `timezones`, `gmt_offset`, `dst_offset`, `raw_offset`) VALUES (?,?,?,?,?)";
 	con.query(sql,data,function(err,rows,field){
 		if(err) return result(err,null);
 		return result(null,rows)
 	})
 }
  timezone.edit = function(id,result)
  {
 	let sql = "select * from timezones where id =?";
 	con.query(sql,id,function(err,rows,field){
 		if(err) return result(err,null);
 		return result(null,rows)
 	})
 }
  timezone.update = function(data,result)
  {
 	var data = [data.country_code,data.timezones,data.gmt_offset,data.dst_offset,data.raw_offset,data.id];
 	let sql = "UPDATE `timezones` SET `country_code`=?,`timezones`=?,`gmt_offset`=?,`dst_offset`=?,`raw_offset`=? WHERE id=?";
 	con.query(sql,data,function(err,rows,field){
 		if(err) return result(err,null);
 		return result(null,rows)
 	})
 }
 timezone.delete = function(id,result)
 {
 	let sql = "DELETE FROM `timezones` WHERE id=?";
 	con.query(sql,id,function(err,rows,field){
 		if(err) return result(err,null);
 		return result(null,rows)
 	})
 }
 module.exports = timezone;