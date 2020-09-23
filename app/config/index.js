const ENV = require('dotenv').config().parsed

module.exports = {
	TOKEN: ENV.TOKEN,
	DEV: ENV.DEV
}