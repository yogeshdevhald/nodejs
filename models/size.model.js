const con = require('./../config/db.js');

var size = function(size)
{
 	this.size_name  = size.size_name;
 	this.sort_order = size.sort_order;
}

size.findAll = function(result){
	let sql = "select * from size";
	con.query(sql,function(err,row,field){
		if(err) result(err,null);
		result(null,row);
	})
}

size.insert = function(data,result){
	var fields = [data.size_name,data.sort_order];
	let sql = "INSERT INTO `sizes`(`size_name`, `sort_order`) VALUES (?,?)";
	con.query(sql,fields,function(err,row,field){
		if(err) result(err,null);
		result(null,row);
	})
}

size.edit = function(data,result){
	let sql = "select * from sizes where id = ?";
	con.query(sql,data,function(err,row,field){
		if(err) result(err,null);
		result(null,row);
	})
}

size.update = function(data,result){
	var data = [data.size_name,data.sort_order,data.id];
	let sql = "UPDATE sizes SET size_name=?,sort_order=? WHERE id=?";
	con.query(sql,data,function(err,row,field){
		if(err) result(err,null);
		result(null,row);
	})
}
size.delete = function(data,result){
	let sql = "delete from sizes where id= ?";
	con.query(sql,data,function(err,row,field){
		if(err) result(err,null);
		result(null,row);
	})
}

module.exports = size;