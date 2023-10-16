/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 923323963788
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;hj4hUbLQ#E7TbaTgQLLYSoiVnP1-_BAXbiH8PvLigsNqRP87uifs' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = ''



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '923323963788'

global.OWNER_NAME = 'Kamran Hasil'

global.TIMEZONE = 'Asia/Karachi' 

global.INBOX_BLOCK_MESSAGE = 'SORRY INBOX NOT ALLOWED ,I WILL BE BLOCKING YOU. PLEASE CONTACT +923323963788' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'K A M I'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@kami 🤹‍♂️' //sticker

global.FOOTER = 'K A M I 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '' // Bot Prefix

global.CAPTION = 'K A M I  © 2023' // Caption

global.ALIVELOGO = 'https://i.imgur.com/rmCgpTY.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'UNLUCKLY I AM NOT DEAD YET' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/CKsZELVzMrrIVI9TDqAu8X' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = false

global.AUTO_REPLY = false

global.VOICE_REPLY = false


/* V card */

global.ytname = "NO YT YET " //ur yt chanel name
global.socialm = "GitHub: kamran522" //ur github or insta name
global.location = "Turbat , Balochistan" //ur location

