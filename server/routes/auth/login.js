const jwt = require('jsonwebtoken');

const config = require(`${__base}/config`);
const User = require(`${__base}/models/User`).User;
const decryptPass = require(`${__base}/libs/decryptPass`);

exports.post = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return next({ status: 400 });

  const getUser = () => User.findOne({ username }).select('password');

  getUser()
    .then(user => {
      if (!user) next({ status: 401 });
      return decryptPass(password, user.password);
    })
    .then(() => {
      const token = jwt.sign({ username }, config.get('secretkey'));
      return token;
    })
    .then(token => res.json({ token }))
    .catch(err => next(err));

  return true;
};
