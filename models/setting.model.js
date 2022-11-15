var con = require('./../config/db.js');

var setting = function(setting)
{
	this.key          = setting.key;
	this.display_name = setting.display_name;
	this.value        = setting.value;
	this.details      = setting.details;
	this.type         = setting.type;
	this.order        = setting.order;
	this.group        = setting.group;
}

setting.findAll = function(result)
{
	let sql = "select * from  settings";
	con.query(sql, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
setting.insert = function(data,result)
{
	var data = [data.key,data.display_name,data.value,data.details,data.type,data.order,data.group];
	let sql = "INSERT INTO `settings`(`key`, `display_name`, `value`, `details`, `type`, `order`, `group`) VALUES(?,?,?,?,?,?,?)";
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
setting.edit = function(data,result)
{	
	let sql = "select * from settings where id=?";
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
setting.update = function(data,result)
{
	var data = [data.key,data.display_name,data.value,data.details,data.type,data.order,data.group,data.id];
	let sql  = "UPDATE settings SET `key`=?,`display_name`=?,`value`=?,`details`=?,`type`=?,`order`=?,`group`=? WHERE 'id'=?";
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
setting.delete = function(data,result)
{
	let sql = "delete from settings where `id`= ?";
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
module.exports = setting;