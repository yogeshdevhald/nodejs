'use strict';
var con = require('./../config/db');
//const multer  = require('multer');
//const upload = multer({ dest: './public/uploads' })
const path = require('path');
//const storage = multer({ storage: storage }).single('img');

const Category = function(categorydata)
{
	this.name  = categorydata.name;
	//this.description = categorydata.description;
	//this.subcat = categorydata.subcat;
	this.img   = categorydata.img;
	//this.order = categorydata.order;
}
Category.findAll = function(result)
{
	let sql = "SELECT * FROM products_categories";
	con.query(sql, (err, rows, fields)=>{
		if(err) return result(err,null);
		return result(null,rows);
	})
}
//cb is call back
Category.insert = function(data,result)
{
	console.log(data.name);
	// var userData = [data.name,users.image];
	// let sql = "";
	// con.query(sql,data,function(err,rows,fields){
	// 	if(err) return result(err,null);
	// 	return result(null,rows);
	// })
}
Category.gallery = function(data,images,result)
{
	console.log("Model");
	console.log(data.name);
	images.forEach(element => {
		console.log("in");
  		console.log(element.filename);
	});
	//console.log(files);
}
module.exports = Category;