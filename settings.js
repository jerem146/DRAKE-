import { watchFile, unwatchFile } from 'fs'
import { fileURLToPath } from 'url'

/*━━━━━━━━━━━【 CONFIG PRINCIPAL 】━━━━━━━━━━━*/
global.owner = [
  '51945786814',
  '5492916450307',
  '5216671548329',
  '573247662531',
  '51921826291',
  '50493732693'
]

global.botNumber = ''
global.sessionName = 'Sessions/Owner'

/*━━━━━━━━━━━【 INFO BOT 】━━━━━━━━━━━*/
global.version = 'v2.0'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝔇ĕ𝐬†𝓻⊙γ𒆜'

global.links = {
  api: 'https://api.yuki-wabot.my.id'
}

/*━━━━━━━━━━━【 IDENTIDAD 】━━━━━━━━━━━*/
global.my = {
  ch: '120363401404146384@newsletter',
  name: 'Yuki Wabot - Official Channel'
}

/*━━━━━━━━━━━【 MENSAJES 】━━━━━━━━━━━*/
global.mess = {
  socket: '《✧》 Solo para conexión Socket.',
  admin: '《✧》 Solo administradores.',
  botAdmin: '《✧》 El bot debe ser admin.'
}

/*━━━━━━━━━━━【 APIs 】━━━━━━━━━━━*/
global.APIs = {
  axi: "https://apiaxi.i11.eu",
  vreden: "https://api.vreden.web.id",
  nekolabs: "https://api.nekolabs.web.id",
  siputzx: "https://api.siputzx.my.id",
  delirius: "https://api.delirius.store",
  ootaizumi: "https://api.ootaizumi.web.id",
  apifaa: "https://api-faa.my.id",
  xyro: "https://api.xyro.site",
  yupra: "https://api.yupra.my.id",
  stellar: "https://api.yuki-wabot.my.id"
}

global.APIKeys = {
  "https://api.yuki-wabot.my.id": "YukiBot-MD"
}

/*━━━━━━━━━━━【 AUTO-RELOAD 】━━━━━━━━━━━*/
const file = fileURLToPath(import.meta.url)

watchFile(file, () => {
  unwatchFile(file)
  console.log('♻️ Archivo actualizado:', file)
  import(`${file}?update=${Date.now()}`)
})