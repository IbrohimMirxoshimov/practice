const bot = require("../core/bot");

let line = {
	fill: "🔲",
	free: "⬜️"
}
let n = 10
let process_array = Array(n).fill(line.free)
bot.command('process', ctx => {
	ctx.reply(process_array.join(""))
	startProcess(ctx)
})

function startProcess(ctx) {
	let t = 1
	let i = setInterval(async () => {

		process_array[t - 1] = line.fill
		await bot.telegram.editMessageText(ctx.chat.id, ctx.message.message_id + 1, null, process_array.join(""))
		if (t > 9) {
			clearInterval(i)
			bot.telegram.sendMessage(ctx.chat.id, "Processing is finished")
		}
		t++

	}, 1000)
}