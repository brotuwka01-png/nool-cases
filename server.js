const express = require("express")
const TelegramBot = require("node-telegram-bot-api")
const path = require("path")

const app = express()

const TOKEN = process.env.BOT_TOKEN

const bot = new TelegramBot(TOKEN, {
polling:true
})

app.use(express.static(__dirname))

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id,

`📜 ПРАВИЛА NOOL CASES

1. NOOL CASES — это развлекательная игра с кейсами внутри Telegram.

2. Открывая кейсы, пользователь соглашается со всеми правилами проекта.

3. Все открытия кейсов происходят случайным образом.

4. Пользователь самостоятельно принимает решение об открытии кейсов.

5. Telegram Stars списываются автоматически после подтверждения оплаты.

6. Возврат Stars после открытия кейса невозможен.

7. Администрация имеет право изменять стоимость кейсов и наград.

8. Некоторые награды могут иметь редкий шанс выпадения.

9. Пользователь обязан соблюдать правила Telegram и проекта.

10. Запрещены попытки взлома, багаюза и обхода системы.

11. Администрация вправе ограничить доступ нарушителям.

12. Если вы выиграете NFT или подарок, администрация проверит наличие предмета.

13. Если выигранный предмет отсутствует в наличии, администрация вправе не выдавать награду.

14. Используя проект, пользователь автоматически соглашается со всеми правилами.

15. Продолжение использования NOOL CASES подтверждает полное согласие пользователя.`,
{
reply_markup:{
inline_keyboard:[
[
{
text:"✅ Согласен"
},
{
text:"❌ Не согласен",
callback_data:"decline"
}
],
[
{
text:"🎰 ОТКРЫТЬ MINI APP",
web_app:{
url:"https://nool-cases.onrender.com"
}
}
]
]
}
})

})

bot.on("callback_query",(query)=>{

if(query.data === "decline"){

bot.sendMessage(query.message.chat.id,

"❌ Вы отказались от правил."
)

}

})

app.get("/",(req,res)=>{

res.sendFile(path.join(__dirname,"index.html"))

})

app.listen(3000,()=>{

console.log("NOOL CASES STARTED")

})
