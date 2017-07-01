const bcrypt = require('bcrypt');

module.exports = (reqPass, userPass) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(reqPass, userPass, (err, valid) => {
      if (err) return reject(err);
      if (!valid) return reject({ status: 401 });
      return resolve();
    });
  });
};
