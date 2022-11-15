'use strict'
const con = require('./../config/db.js');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

var login = function(logindata)
{
	this.email    = logindata.email
	this.password = logindata.password
}

login.signin = function(data,result)
{
	//const hashed_password = md5(data.password.toString());
	// console.log(data);
	// return false;
	let sql = "SELECT * FROM users WHERE email = ? AND password = ?";
	
	//console.log(hashed_password);
	
	//let userinfo  = [data.email,hashed_password];
	console.log(md5(data.password.toString()));
	return false;
	con.query(sql,userinfo,function(err,row,fields){
		// console.log(err);
		 //console.log(row);
		console.log(fields);
		if(err)
		{
			console.log("error");
			obj = {print: result};
			console.log(obj);
            //res.render('print', obj);
			// console.log(err);
			// result(err, null);
		}
		else{
			console.log("sucees");
			// let token = jwt.sign({ data: result }, 'secret')
			// result(null, token);
		}
	})
}
module.exports = login;