const ENV = require('dotenv').config().parsed
const DEV = 863381603 // "Your id"
module.exports = {
	TOKEN: ENV.TOKEN,
	DEV
}