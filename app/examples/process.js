const bot = require("../core/bot");

let line = {
	fill: "🔲",
	free: "⬜️"
}
let n = 10
bot.command('process', ctx => {
	if (!ctx.session.ps) {
		ctx.session.ps = true
		ctx.session.p_array = Array(n).fill(line.free)
		ctx.reply(ctx.session.p_array.join("") + " 0%").then(res => {
			startProcess(ctx, res.message_id)
		})
	}
})

function startProcess(ctx, mid) {
	let t = 1
	let i = setInterval(async () => {

		ctx.session.p_array[t - 1] = line.fill
		await bot.telegram.editMessageText(ctx.chat.id, mid, null, ctx.session.p_array.join("") + " " + t * 10 + "%")
		if (t > 9) {
			clearInterval(i)
			bot.telegram.sendMessage(ctx.chat.id, "Processing is finished")
			ctx.session.ps = false
		}
		t++
	}, 1000)
}