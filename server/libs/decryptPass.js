const bcrypt = require('bcrypt');

module.exports = function(reqPass, userPass){

  return new Promise((resolve, reject) => {
    bcrypt.compare(reqPass, userPass, function(err, valid){
      console.log('here', err);
      if(err) return reject(err);
      if(!valid) return reject({status: 401});
      resolve();
    })
  });
}