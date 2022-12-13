const request = require('request');
  exports.vaultedCreate = function(req,res)
  {
      var data = {
          "firstName":req.firstName,
          "lastName":req.lastName
      }
      request.post('https://sandbox.bluesnap.com/services/2/vaulted-shoppers',
      {
          json: data,
          headers: {
            'Authorization' : 'Basic QVBJXzE0NDQ2NTAyMDMxNDQ5NDA0MjIzNjU6QkxVRTEyMw==',
            'accept' : 'application/json',
            'bluesnap-version' : '3.0',
            'content-type' : 'application/json',
              
          }
      }, function (error, response, body) {
          if (error) {
             console.log(error);
          }else{
            console.log(response.body);
          }
      });
  }
//Get all vaultedr
  exports.vaultedGet = function(req,res)
  {
    request.get('https://sandbox.bluesnap.com/services/2/vaulted-shoppers/'+req.body.valuetedid,
    {
      headers: {
        'Authorization' : 'Basic QVBJXzE0NDQ2NTAyMDMxNDQ5NDA0MjIzNjU6QkxVRTEyMw==',
        'accept' : 'application/json',
        'bluesnap-version' : '3.0',
        'content-type' : 'application/json',        
        }
    }, function (error, response, body) {
        if (error) {
          console.log("error"+error);
        }else{
          console.log(response.body);
        }
    });
  }
  // exports.vaultedDelete = function(req,res)
  // {
  //   request.delete('https://sandbox.bluesnap.com/services/2/vaulted-shoppers/20769005',
  //   {
  //     headers: {
  //       'Authorization' : 'Basic QVBJXzE0NDQ2NTAyMDMxNDQ5NDA0MjIzNjU6QkxVRTEyMw==',
  //       'accept' : 'application/json',
  //       'bluesnap-version' : '3.0',
  //       'content-type' : 'application/json',        
  //     }
  //   },function (error, response, body) {
  //         if (error){
  //           console.log("error"+error);
  //         }else{
  //           console.log(response.body);
  //         }
  //   }
  //   );
  // }

  //update valunter shopper
  exports.vaultedUpdate = function(req,res)
  {
      var data = {
        "firstName" : req.firstName,
        "lastName"  : req.lastName
      }
      request.put('https://sandbox.bluesnap.com/services/2/vaulted-shoppers/'+req.body.id,
      {
          json: data,
          headers: {
            'Authorization' : 'Basic QVBJXzE0NDQ2NTAyMDMxNDQ5NDA0MjIzNjU6QkxVRTEyMw==',
            'accept' : 'application/json',
            'bluesnap-version' : '3.0',
            'content-type' : 'application/json',
          }
      }, function (error, response, body) {
          if (error) {
             console.log(error);
          }else{
            console.log(response.body);
          }
      }
      );
  }
  //local bank transaction
  exports.createTransaction = function(req,res)
  {
    var data = {
        "amount"     : req.body.amount,
        "firstName"  : req.body.firstName,
        "lastName"   : req.body.lastName,
        "country"    : req.body.country,
        "currency"   : req.body.currency
      }
      request.post('https://sandbox.bluesnap.com/services/2/alt-transactions',
      {
          json: data,
          headers: {
            'Authorization' : 'Basic QVBJXzE0NDQ2NTAyMDMxNDQ5NDA0MjIzNjU6QkxVRTEyMw==',
            'accept' : 'application/json',
            'bluesnap-version' : '3.0',
            'content-type' : 'application/json',
          }
      }, function (error, response, body) {
          if (error) {
             console.log(error);
          }else{
            console.log(response.body);
          }
      }
      );
  }

