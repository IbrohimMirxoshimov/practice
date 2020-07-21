const { default: Telegraf, session } = require("telegraf");
const config = require('../config');
const { getLanguageKeyboard } = require("../util/keyboard");
const TOKEN = config.TOKEN
const bot = new Telegraf(TOKEN)

bot.catch(err => {
	console.log("Global error", err);
})
bot.use(session())

bot.start(ctx => {
	ctx.reply("Tilni tanlang", getLanguageKeyboard())
})

bot.action(/[uo]z/, ctx => {
	ctx.answerCbQuery()
	ctx.editMessageText(`Assalomu alaykum ${ctx.from.first_name}\n /process - amazing`)
})

console.log("Bot launched...");
bot.launch()

module.exports = bot