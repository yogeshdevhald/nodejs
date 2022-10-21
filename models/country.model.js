'use strict';
var con = require ('./../config/db.js');
var country = function(countrydata)
{
	this.country_print = countrydata.country_print;
	this.currency = countrydata.currency;
	this.vat = countrydata.vat;
	this.product_id = countrydata.product_id;
	this.product_id_gift = countrydata.product_id_gift;
	this.visible_in_reg = countrydata.visible_in_reg;
}

country.findAll = function (result) {
	let sql = 'SELECT * FROM countries';
	con.query(sql, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
};
country.insert = function(data,result)
{
	var data = [data.country_print,data.currency,data.vat,data.product_id,data.product_id_gift,data.visible_in_reg];
	let sql  = 'insert  into countries(country_print,currency,vat,product_id,product_id_gift,visible_in_reg) values(?,?,?,?,?,?)';
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
country.edit = function(data,result)
{
	var data = [data.country_print,data.currency,data.vat,data.product_id,data.product_id_gift,data.visible_in_reg];
	let sql  = 'select * from countries where id = ?';
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
country.update = function(data,result)
{
	var updateData =  [data.country_print,data.currency,data.vat,data.product_id,data.product_id_gift,data.visible_in_reg,data.id];
	///var id         =  data.id;
	// console.log(updateData);
	// console.log(id);
	// return false;
	let sql  = 'UPDATE countries SET country_print=?,currency=?,vat=?,product_id=?,product_id_gift=?,visible_in_reg=? WHERE id=?';
	con.query(sql,updateData, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}

country.delete = function(data,result)
{
	let sql  = 'DELETE  FROM countries WHERE id = ?';
	con.query(sql,data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}
module.exports = country;