import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { get_weather } from "./weather.js";
import { show_menu, close_menu } from "./menu.js";
import { get_cat } from "./cat.js";

const bot = new Telegraf(config.telegram_token, {});
bot.start((ctx) => ctx.reply('Welcome. To get started, write "Start"'));
bot.on("message", async ctx=>{
    const chat_id = ctx.chat.id;

    if ((ctx.message.text).toLowerCase() == "start") {
        show_menu(bot, chat_id);
    } else if((ctx.message.text).toLowerCase() == "check the weather") {
        let weather = await get_weather(ctx);
        ctx.reply(weather);
    } else if((ctx.message.text).toLowerCase() == "get cat") {
        let cat = await get_cat();
        ctx.reply(cat);
    } else {
        console.log(ctx.message.text)
        close_menu(bot, chat_id);
    }
})
bot.launch()
