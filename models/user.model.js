'use strict';
var con = require('./../config/db');
//const { encrypt, decrypt } = require('./../helper/crpyto.js');
const bcrypt = require("bcrypt");
const salt = 10;
// Item Object
var User = function(user){
  this.id           = user.id;
  this.username     = user.username;
  this.email        = user.email;
  this.password     = user.password;
  this.status       = user.status;
  this.expire       = user.expire;
  this.groups       = user.groups;
  this.date         = user.date;
  this.firstname    = user.firstname;   
  this.lastname     = user.lastname;
  this.address1     = user.address1;
  this.address2     = user.address2;
  this.city         = user.city;
  this.state        = user.state;
  this.zip          = user.zip;
  this.country      = user.country;
  this.phone        = user.phone;
  this.email        = user.email;
  this.c1           = user.c1;
  this.c2           = user.c2;
  this.c3           = user.c3;
  this.c4           = user.c4;
  this.date         = user.date;    
  this.username     = user.username;
  this.type         = user.type;
  this.result       = user.result;
  this.details      = user.details;
  this.date         = user.date;
  this.next_renew   = user.next_renew;
  this.price        = user.price;
  this.card_id      = user.card_id;
  this.retry        = user.retry;
  this.username     = user.username;
  this.product      = user.product;
  this.status       = user.status;
  this.expire       = user.expire;
  this.cancel       = user.cancel;
  this.order        = user.order;
  this.first_name   = user.first_name;
  this.last_name    = user.last_name;
  this.address1     = user.address1;
  this.address2     = user.address2;
  this.city         = user.city;
  this.state        = user.state;
  this.zip          = user.zip;
  this.country      = user.country;
  this.phone        = user.phone;
  this.email        = user.email;
  this.directions   = user.directions;
  this.shipped      = user.shipped;
  this.reg_temp_code = user.reg_temp_code;
  this.username    =user.username;
  this.password    =user.password;
  this.email       =user.email;
  this.joined      =user.joined;
  this.expires     =user.expires;
  this.logins      =user.logins;
  this.last_login  =user.last_login;
  this.last_update =user.last_update;
  this.renew_date  =user.renew_date;
  this.activated   =user.activated;
  this.activate_type =user.activate_type;
  this.status      =user.status;
  this.lead        =user.lead;
  this.trial       =user.trial;
  this.start_page  =user.start_page;
  this.trackstat   =user.trackstat;
  this.reg_page    =user.reg_page;
  this.added_by    =user.added_by;
  this.flag_exempt =user.flag_exempt;
  this.ip          =user.ip;
  this.order_id    =user.order_id;
  this.total_concurrent =user.total_concurrent;
  this.product_id = user.product_id;
  this.login_attempts = user.login_attempts;
  this.locked_until = user.locked_until;
  this.max_logins = user.max_logins;
  this.concurrent_login_notices = user.concurrent_login_notices;
  this.concurrent_login_date = user.concurrent_login_date;
  this.email_optout = user.email_optout;
  this.updated = user.updated;
  this.n1 = user.n1;
  this.nP1 = user.nP1;
  this.nD1 = user.nD1;
  this.coupon_type = user.coupon_type;
  this.role_id = user.role_id;
  this.remember_token = user.remember_token;
}; 
/*For get user data*/
User.findAll = function (result) {
	let sql = 'SELECT * FROM users';
	con.query(sql, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows);
	});
};
/*For insert user data*/
User.insert = function(users,result){
	bcrypt.genSalt(salt,function(err,salt){
	    bcrypt.hash(users.password,salt,function(err,hash){
	      const encryptPassword = hash;
    		var userData          = [users.username,users.email,hash,users.status,users.expire];
    		var sessionData       = [users.username,users.groups,users.date];
    		var bliingData        = [users.username,users.firstname,users.lastname,users.address1,users.address2,users.city,users.state,users.zip,users.country,users.phone,users.email,users.c1,users.c2,users.c3,users.c4];
    		var activityData      = [users.date,users.username,users.type,users.result,users.details];
 				var shippingData      = [users.order,users.first_name,users.last_name,users.address1,users.address2,users.city,users.state,users.zip,users.country,users.phone,users.email,users.directions,users.shipped];
 				var chargeData        = [users.date,users.next_renew,users.price,users.card_id,users.retry,users.username,users.product,users.status,users.expire,users.cancel];
 				var memberData        = [users.reg_temp_code,users.username,users.password,users.email,users.joined,users.expires,users.logins,users.last_login,users.last_update,users.renew_date,users.activated,users.activate_type,users.status,users.lead,users.trial,users.start_page,users.trackstat,users.reg_page,users.added_by,users.flag_exempt,users.ip,users.order_id,users.total_concurrent,users.product_id,users.login_attempts,users.locked_until,users.max_logins,users.concurrent_login_notices,users.concurrent_login_date,users.email_optout,users.updated, users.n1,users.nP1, users.nD1,users.coupon_type,users.role_id,users.remember_token];
 				var memberFieldData   = [users.username,users.reg_temp_code,users.full_name,users.address,users.city,users.zip,users.country,users.size,users.date_of_birth,users.phone,users.gateway,users.shipping_type];

    		let sql      = 'INSERT INTO users(username,email,password,status,expire) VALUES(?,?,?,?,?)';
    		con.query(sql,userData, function(err, row){
        if (err) throw err;
        let sql2     = 'INSERT INTO sessions(username,groups,date) VALUES(?,?,?)';
	      	con.query(sql2,sessionData, function(err, row) {
	          if (err) throw err;
	        }); 
	      let sql3     = 'INSERT INTO billing(username, firstname, lastname, address1, address2, city, state, zip, country,phone,email,c1,c2,c3,c4) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	      		con.query(sql3,bliingData, function(err, row) {
	            if (err) throw err;
	            console.log(row);
	        });
	        
	      let sql4   = 'INSERT INTO recent_activity(date,username,type,result,details) VALUES (?,?,?,?,?)';
	      	con.query(sql4,activityData, function(err, row) {
	            if (err) throw err;
	          });
	          let sql5   = 'INSERT INTO charge(date,next_renew,price, card_id, retry, username, product, status, expire, cancel) VALUES (?,?,?,?,?,?,?,?,?,?)';
		      	con.query(sql5,chargeData, function(err, row) {
		            if (err) throw err;
		        });
		        let sql6   = 'INSERT INTO `shipping`(`order`, `first_name`, `last_name`, `address1`, `address2`, `city`, `state`, `zip`, `country`, `phone`, `email`, `directions`, `shipped`)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
	      	con.query(sql6,shippingData, function(err, row) {
	            if (err) throw err;
	            console.log(err);
	            console.log(row);
	        }); 
	        let sql7   = 'INSERT INTO `members`(`reg_temp_code`, `username`, `password`, `email`, `joined`, `expires`, `logins`, `last_login`, `last_update`, `renew_date`, `activated`, `activate_type`, `status`, `lead`, `trial`, `start_page`, `trackstat`, `reg_page`, `added_by`, `flag_exempt`, `ip`, `order_id`, `total_concurrent`, `product_id`, `login_attempts`, `locked_until`, `max_logins`, `concurrent_login_notices`, `concurrent_login_date`, `email_optout`, `updated`, `n1`, `nP1`, `nD1`, `coupon_type`, `role_id`, `remember_token`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	      	con.query(sql7,memberData, function(err, row) {
	            if (err) throw err;
	            console.log(err);
	            console.log(row);
	        }); 
	        let sql8   = 'INSERT INTO `members_fields`(`username`, `reg_temp_code`, `full_name`, `address`, `city`, `zip`, `country`, `size`, `date_of_birth`, `phone`, `gateway`, `shipping_type`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
	      	con.query(sql8,memberFieldData, function(err, row) {
	            if (err) throw err;
	            console.log(err);
	            console.log(row);
	            result(null, row.insertId);
	        }); 
    		});
	    })
  })
}
/*Edit user*/
User.edit = function(id,result){
	let sql = 'select * from users where id = ?';
	con.query(sql,id,function(err,rows,fields){
		if(err) result(err,null);
		return result(null,rows);
	})
}  
/*Update user*/
User.update = function(user,result){
	let updateData = [user.user_name,user.email,user.password,user.status,user.expire,user.id];
	let sql = 'UPDATE users SET user_name=?,email=?,password=?,status=?,expire=? WHERE id=?';
	con.query(sql,updateData,function(err,rows,fields){
		if(err) result(err,null);
		return result(null,rows);
	})
}
/*Delete user*/
User.delete = function(id,result){
	let sql = 'delete from users where id= ?';
	con.query(sql,id,function(err,rows,fields){
		if(err) result(err,null);
		return result(null,'Deleted sucess.');
	})
}
module.exports = User;