'use strict';
const con = require('./../config/db.js');
var phonecode = function(phone)
{
	this.code = phone.code;
}
phonecode.insert = function(data,result)
{
	var data = [data.code];
	let sql  = 'INSERT INTO `phonecodes`(`code`) VALUES (?)';
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
phonecode.findAll = function(result)
{
	let sql = "SELECT * FROM phonecodes";
	con.query(sql,(err,rows,fields)=>{
		if(err) result(err,null);
		result(null,rows);
	})
}
phonecode.edit = function(id,result)
{
	let sql = "SELECT * FROM phonecodes WHERE id  = ?";
	console.log(id);
	con.query(sql,id,function(err,row,field){
		if(err) return result(err,null);
		result(null,row);
	})
}
phonecode.update = function(data,result)
{
	var data = [data.code,data.id];
	let sql = "UPDATE `phonecodes` SET `code`= ? WHERE `id`=?";
	con.query(sql,data,function(err,row,field){
		if(err) return result(err,null);
		result(null,row);
	})
}
phonecode.delete = function(id,result)
{
	let sql = "DELETE FROM `phonecodes` WHERE id=?";
	con.query(sql,id,function(err,row,field){
		if(err) return result(err,null);
		result(null,row);
	})
}
module.exports = phonecode;