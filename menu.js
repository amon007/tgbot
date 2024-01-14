export const show_menu = (bot, chat_id) => {
    bot.telegram.sendMessage(chat_id, "Select actions", {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Check the weather",
                        // request_location: true
                    }
                ],
                [
                    "Get cat"
                ],
                [
                    "Close"
                ]
            ]
        }
    })
}

export const close_menu = (bot, chat_id) => {
    bot.telegram.sendMessage(chat_id, "Keyboard closed", {
        reply_markup: {
            remove_keyboard: true
        }
    })
}