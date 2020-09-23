const { Extra } = require("telegraf");

function getLanguageKeyboard() {
  return Extra.markup((m) =>
    m.inlineKeyboard(
      [
        m.callbackButton(`🇷🇺 Русский`, 'ru', false),
        m.callbackButton(`🇺🇿 O'zbek`, 'uz', false)
      ],
    )
  );
}

module.exports = {
  getLanguageKeyboard
}