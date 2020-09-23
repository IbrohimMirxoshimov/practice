const { BaseScene } = require("telegraf");
const { getLanguageKeyboard } = require("../util/keyboard");
// const updateLanguage = require("../utils/language");

const languageChangeAction = async (ctx) => {
  const langData = JSON.parse(ctx.callbackQuery.data);
  await updateLanguage(ctx, langData.p);
  ctx.deleteMessage(ctx.session.dm)
  ctx.scene.leave();
  ctx.scene.enter("info")
};

const start = new BaseScene('start')
  .enter(async (ctx) => {
    await ctx.reply(ctx.i18n.t('choose_lang'), getLanguageKeyboard())
      .then(res => {
        ctx.session.dm = res.message_id
      });
  })
  .action(/languageChange/, languageChangeAction)
  .on('message', (ctx) => {
    ctx.deleteMessage(ctx.session.dm).catch(err => {
      console.log("Message not found: " + ctx.session.dm);
    })
    ctx.session.dm = ctx.message.message_id + 1
    ctx.reply(ctx.i18n.t('choose_lang'), getLanguageKeyboard());
  })
  .leave(ctx => {
    console.log('start.leave');
  });

module.exports = start