const fs = require('fs');
const chalk = require('chalk');

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "237651954407"],
global.ownername = process.env.OWNER_NAME || "𓆩𝑴𝒂𝒄𝒉𝒊𝒂𝒗𝒆𝒍𓆪 ✇ ",
global.ytname = "YT: 𝑴𝒂𝒄𝒉𝒊𝒂𝒗𝒆𝒍"
global.socialm = "GitHub: Baezeus"
global.location = "Africa"

global.botname = process.env.BOTNAME || "𝐓𝐎𝐆𝐄-𝐌𝐃-𝐕𝟑",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "𝑴𝒂𝒄𝒉𝒊𝒂𝒗𝒆𝒍シ︎",
global.packname = '𝑴𝒂𝒄𝒉𝒊𝒂𝒗𝒆𝒍'
global.author = process.env.AUTHOR || "𓆩𝑴𝒂𝒄𝒉𝒊𝒂𝒗𝒆𝒍𓆪 ✇ ",
//console view/theme
global.themeemoji = '𓅃'
global.wm = "𝐓𝐎𝐆𝐄_𝐁𝐎𝐓 𝐈𝐧𝐜 ✨"

//theme link
global.link = ''

//custom prefix
global.prefa = process.env.PREFIX || "#",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '💫 *𝑩𝒐𝒏 𝒃𝒂𝒉 𝒗𝒐𝒊𝒍𝒂̀, sensei!* ',
    prem: '💫 *hello senpai, 𝑹𝒆𝒔𝒆𝒓𝒗𝒆́𝒆 𝒖𝒏𝒊𝒒𝒖𝒆𝒎𝒆𝒏𝒕 𝒑𝒐𝒖𝒓 𝒍𝒆𝒔 𝒎𝒆𝒎𝒃𝒓𝒆𝒔 𝒑𝒓𝒆𝒎𝒊𝒖𝒎𝒔*',
    admin: '💫 *hello senpai, 𝑹𝒆𝒔𝒆𝒓𝒗𝒆́𝒆 𝒖𝒏𝒊𝒒𝒖𝒆𝒎𝒆𝒏𝒕 𝒑𝒐𝒖𝒓 𝒍𝒆𝒔 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒕𝒆𝒖𝒓𝒔*',
    botAdmin: '💫 *senpai, 𝑭𝒂𝒖𝒕 𝒒𝒖𝒆 𝒔𝒐𝒊𝒔 𝒂𝒅𝒎𝒊𝒏* ',
    owner: '💫 *hello senpai, 𝒄𝒆𝒕𝒕𝒆 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒆 𝒆𝒔𝒕 𝒓𝒆𝒔𝒆𝒓𝒗𝒆́𝒆 𝒂̀ 𝒎𝒐𝒏 𝒑𝒓𝒐𝒑𝒓𝒊𝒆́𝒕𝒂𝒊𝒓𝒆*',
    group: '💫 *sensei, this feature is exclusively for groups*',
    private: '💫 *hello senpai, this feature is exclusively for private chats*',
    wait: '💫 *hello senpai, 𝒆𝒏 𝒄𝒐𝒖𝒓𝒔...* ',    
    error: '💫 *hello senpai, 𝒖𝒏𝒆 𝒇𝒖𝒄𝒌𝒊𝒏𝒈 𝒆𝒓𝒓𝒆𝒖𝒓!*',
}
module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"false",
}

global.thumb = fs.readFileSync('./lib/Assets/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
    
