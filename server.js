const express = require("express")
const TelegramBot = require("node-telegram-bot-api")

const app = express()

const TOKEN = process.env.BOT_TOKEN

const bot = new TelegramBot(TOKEN, { polling: true })

const cases = [
{
name: "🐻 Медведь",
chance: 5
},
{
name: "❤️ Сердце",
chance: 5
},
{
name: "❌ Пусто",
chance: 90
}
]

function rollCase() {

const random = Math.random() * 100

let current = 0

for (const item of cases) {

current += item.chance

if (random <= current) {
return item.name
}

}

return "❌ Пусто"

}

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id,

`🎰 NOOL CASES

💎 Открывай кейсы за Telegram Stars

🔥 Редкие призы
🐻 NFT
❤️ Подарки
🎁 И многое другое`,
{
reply_markup: {
keyboard: [
["🎰 Открыть кейс"],
["👤 Профиль"]
],
resize_keyboard: true
}
})

})

bot.on("message", async (msg) => {

if (!msg.text) return

if (msg.text === "🎰 Открыть кейс") {

bot.sendMessage(msg.chat.id,

`💫 CASE PRICE: 15 ⭐

Для теста кейс откроется бесплатно`
)

bot.sendMessage(msg.chat.id, "🎰 Крутится рулетка...")

setTimeout(() => {

const win = rollCase()

bot.sendMessage(msg.chat.id,

`🎉 Результат:

${win}`
)

}, 3000)

}

if (msg.text === "👤 Профиль") {

bot.sendMessage(msg.chat.id,

`👤 Ваш профиль

🆔 ID:
${msg.from.id}

⭐ Кейсов открыто:
0`
)

}

})

app.get("/", (req,res) => {

res.send(`

<h1 style="font-family:sans-serif;">
NOOL CASES ONLINE 🎰
</h1>

`)

})

app.listen(3000, () => {
console.log("NOOL CASES STARTED")
})
