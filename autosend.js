module.exports.config = {

    name: 'autosendmessage',

    version: '10.02',

    hasPermssion: 2,

    credits: 'DC-Nam',

    description: 'Tự động gửi tin nhắn theo giờ đã cài!',

    commandCategory: 'Hệ thống',

    usages: '[]',

    cooldowns: 3

};

const r = a => a[Math.floor(Math.random()*a.length)],

{get} = require('axios'),

config = [

  {

    timer: '6:00:00 AM',

    message: ['🔔====𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢====🔔\n━━━━━━━━━━━━━━━━━━\n💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n➝ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸/𝘁𝗵\n➝ Đ𝘂̛𝗼̛̣𝗰 𝘁𝗮𝗴 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗯𝗼𝘅 𝗸𝗲̂̉ 𝗰𝗮̉ 𝗱𝘂̛𝗼̛́𝗶 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶\n➝ 𝗗𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗔𝗱𝗺𝗶𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n➝ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟰𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n➝ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

},

{

  timer: '10:00:00 AM',

  message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝗳𝘂𝗹𝗹 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

},

  {

    timer: '12:00:00 PM',

    message: '\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝗳𝘂𝗹𝗹 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴'

  },

  {

    timer: '1:00:00 PM',

    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝗳𝘂𝗹𝗹𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

  },

  {

    timer: '3:00:00 PM',

    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝗳𝘂𝗹𝗹𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

  },

  {

    timer: '5:00:00 PM',

    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝗳𝘂𝗹𝗹𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

  },

  {

    timer: '7:00:00 PM',

    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝗳𝘂𝗹𝗹 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

  },

  {

    timer: '10:00:00 PM',

    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝗳𝘂𝗹𝗹 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

  },

  {

    timer: '12:00:00 AM',

    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝗳𝘂𝗹𝗹 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

  },

  {

    timer: '3:00:00 AM',

    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝗳𝘂𝗹𝗹 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

  },

  {

    timer: '',

    message: ['']

  },

  {

    timer: '',

    message: ['']

  },

  {

    timer: '',

    message: ['']

  },

  {

    timer: '',

    message: ['']

  },

  {

    timer: '',

    message: ['']

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  },

  {

    timer: '',

    message: ''

  }

];

module.exports.onLoad = o => {

    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);

    global.autosendmessage_setinterval = setInterval(async function() {

        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {

            var msg = r(á.message);

            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://jrt-api.nguyenhaidang.ml/love`)).data.data)

            msg = {

                body: msg, attachment: (await get((await get(`https://Anime4k.thanhnguyenlo.repl.co/api/video`)).data.data, {

                    responseType: 'stream'

                })).data

            };

            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));

        };

    }, 1000);

};

module.exports.run = () => {};
