const { Extra } = require("telegraf");

function getLanguageKeyboard() {
	return Extra.markup((m) =>
		m.inlineKeyboard(
			[
				m.callbackButton(`🇺🇿 Ўзбек`, JSON.stringify({ a: 'languageChange', p: 'uz' }), false),
				m.callbackButton(`🇺🇿 O'zbek`, JSON.stringify({ a: 'languageChange', p: 'oz' }), false)
			],
		)
	);
}

module.exports = {
	getLanguageKeyboard
}