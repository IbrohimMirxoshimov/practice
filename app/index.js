const { default: Telegraf } = require("telegraf");
const config = require('./config');
const { getLanguageKeyboard } = require("./util/keyboard");
const TOKEN = config.TOKEN
const bot = new Telegraf(TOKEN)

bot.catch(err => {
	console.log("Global error", err);
})

bot.start(ctx => {
	ctx.reply("Tilni tanlang", getLanguageKeyboard())
})

bot.launch()

module.exports = bot