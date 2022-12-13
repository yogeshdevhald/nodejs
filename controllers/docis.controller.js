'use strict'
var _this = this;

exports.getAppointment = function(req,res)
{
	var resolve = _this.executepromise();
	resolve.then((result) => {
	    console.log("Success", result);
	}).catch((error) => {
	    console.log("Error", error);
	})
}

exports.executepromise = function()
{
	console.log("Hererer");
	return new Promise(
	    function (resolve, reject) {
	        resolve("Yes");
		});
}