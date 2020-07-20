const { default: Telegraf } = require("telegraf");
const config = require('./config')
const TOKEN = config.TOKEN
const bot = new Telegraf(TOKEN)

bot.catch(err => {
	console.log("global error, in bot.js ", err);
})

bot.start(ctx => {
	ctx.reply("Hello")
})

bot.launch()

module.exports = bot