'use strict';
var con = require('./../config/db');
var userInfos = function(userInfo){
	this.id               = userInfo.id;
    this.user_id          = userInfo.user_id;
    this.full_name        = userInfo.full_name;
    this.size             = userInfo.size;
    this.address          = userInfo.address;
    this.zip              = userInfo.zip;
    this.city             = userInfo.city;
    this.country          = userInfo.country;
    this.phone            = userInfo.phone;
    this.gateway          = userInfo.gateway;
    this.shipping_type    = userInfo.shipping_type;
};

userInfos.findAll = function(result){
	let sql = 'SELECT * FROM user_additional_infos';
	con.query(sql, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
}

userInfos.insert = function(userinfo,result){
	let data = [userinfo.user_id,userinfo.full_name,userinfo.size,userinfo.address,userinfo.zip,userinfo.city,userinfo.country,userinfo.phone,userinfo.gateway,userinfo.shipping_type];
	let sql = 'INSERT INTO user_additional_infos(user_id,full_name,size,address,zip,city,country,phone,gateway,shipping_type) VALUES(?,?,?,?,?,?,?,?,?,?)';
	con.query(sql,data,(err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows.insertId);
	});
}

userInfos.edit = function(id,result){
	let sql = "select * from user_additional_infos where id =?";
	con.query(sql,id,function(err,row,field){
		if(err) return result(err,null);
		result(null,row);
	})
}

userInfos.update = function(userinfo,result){
	let data = [userinfo.user_id,userinfo.full_name,userinfo.size,userinfo.address,userinfo.zip,userinfo.city,userinfo.country,userinfo.phone,userinfo.gateway,userinfo.shipping_type,userinfo.id];
	let sql = "UPDATE user_additional_infos SET user_id=?,full_name=?,size=?,address=?,zip=?,city=?,country=?,phone=?,gateway=?,shipping_type=? WHERE id=?";
	con.query(sql,data,function(err,row,field){
		if(err) return result(err,null);
		result(null,row);
	})
}

userInfos.delete = function(id,result){
	let sql = 'delete from user_additional_infos where id= ?';
	con.query(sql,id,function(err,row,field){
		if(err) return result(err,'Something went wrong.');
		result(null,row);
	})
}

module.exports = userInfos;