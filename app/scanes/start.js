const { BaseScene } = require("telegraf");
const { getLanguageKeyboard } = require("../util/keyboard");

const text = {
	ru: "Привет",
	uz: "Salom"
}

const start = new BaseScene('start')
	.enter((ctx) => {
		ctx.reply("Tilni tanlang", getLanguageKeyboard())
	})
	.action(/.+/, ctx => {
		const lang = ctx.callbackQuery.data
		console.log(lang);
		// await updateLanguage(ctx, langData.p);
		ctx.deleteMessage()
		ctx.reply(text[lang])
		// ctx.scene.enter("info")
	})
	.on('message', (ctx) => {
		ctx.deleteMessage()
		ctx.reply("Tilni tanlang", getLanguageKeyboard());
	})
	.leave(ctx => {
		console.log('start.leave');
	});

module.exports = start