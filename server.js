const express = require("express")
const TelegramBot = require("node-telegram-bot-api")
const path = require("path")

const app = express()

const TOKEN = process.env.BOT_TOKEN

const bot = new TelegramBot(TOKEN, { polling: true })

app.use(express.static(__dirname))

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id,

`🎰 NOOL CASES

🔥 Mini App готов

👇 Нажми кнопку снизу`,
{
reply_markup: {
keyboard: [
[
{
text:"🎰 OPEN CASES",
web_app:{
url:"https://nool-cases.onrender.com"
}
}
]
],
resize_keyboard:true
}
})

})

app.get("/", (req,res) => {
res.sendFile(path.join(__dirname,"index.html"))
})

app.listen(3000, () => {
console.log("NOOL CASES STARTED")
})
