const { Extra } = require("telegraf");

function getLanguageKeyboard() {
  return Extra.markup((m) =>
    m.inlineKeyboard(
      [
        m.callbackButton(`🇺🇿 Ўзбек`, 'uz', false),
        m.callbackButton(`🇺🇿 O'zbek`, 'oz', false)
      ],
    )
  );
}

module.exports = {
  getLanguageKeyboard
}