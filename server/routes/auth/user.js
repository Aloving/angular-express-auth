const jwt = require('jsonwebtoken');

const User = require(`${__base}/models/User`).User;
const config = require(`${__base}/config`);
const cryptPass = require(`${__base}/libs/cryptPass`);

exports.post = (req, res, next) => {
  const user = User();
  const username = req.body.username;
  const password = req.body.password;

  cryptPass(password)
    .then(hash => {
      user.username = username;
      user.password = hash;
      return user.save();
    })
    .then(response => res.json(response))
    .catch(next);
};

exports.get = (req, res, next) => {
  const xAuth = req.headers['x-auth'];

  if (!xAuth) next({ status: 401 });

  const getDecodeJson = () =>
    new Promise((resolve, reject) => {
      jwt.verify(xAuth, config.get('secretkey'), (err, decoded) => {
        if (err) return reject(err);
        return resolve(decoded);
      });
    });

  getDecodeJson()
    .then(decoded => User.findOne({ username: decoded.username }))
    .then(user => res.json(user))
    .catch(next);
};
