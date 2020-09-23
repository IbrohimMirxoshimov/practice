const { default: Telegraf, session, Stage } = require("telegraf");
const { TOKEN, DEV } = require('../config');
const bot = new Telegraf(TOKEN)
const scenes = require("../scanes");
const stage = new Stage(Object.keys(scenes).map(s => scenes[s]));

bot.use(session())
bot.use(stage.middleware())

bot.launch().then(res => {
	const text = "Bot started"
	console.log(text);
	bot.telegram.sendMessage(DEV, text)
}).catch(err => {
	console.log("Global error", err);
})

module.exports = { bot }