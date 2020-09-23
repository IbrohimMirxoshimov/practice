const { bot } = require("./bot");

bot
  .start(ctx => {
    console.log(ctx.session);
    ctx.scene.enter('start')
  })
  .on("message", (ctx) => {
    ctx.reply("Select what you want\n\n/process - amazing command\n/start - start any thing");
  })