const bcrypt = require('bcrypt');

module.exports = function(password) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
};
