var con = require('./../config/db');
var phonecode = function(phone)
{
	this.code = phone.code;
}
phonecode.insert = function(data,result)
{
	var data = [data.code];
	console.log(data);
	return false;
	// let sql = "";
	// con.query(sql, (err, rows, fields) => {
	// 	console.log("error: ", err);
	// 	if (err) result(err, null);
	// 	result(null, rows);
	// });
}
exports.module = phonecode;