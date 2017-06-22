const router = require('express').Router();

const user = require('./user');
const login = require('./login');

router.post('/user', user.post);
router.get('/user', user.get);

router.post('/login', login.post);

module.exports = router;
