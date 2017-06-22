const config = require(`${__base}/config`);
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;
