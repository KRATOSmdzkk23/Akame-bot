const a = '```'

exports.wait = () => {
	return`*[❗] Aguarde...*`
}

exports.succes = () => {
	return`*✅Sucesso✅*`
}

exports.lvlon = () => {
	return`*「 MODO 」 LEVELING ATIVADO ✅*`
}

exports.lvloff = () => {
	return`*「 MODO 」 LEVELING DESATIVADO ✅*`
}

exports.lvlnul = () => {
	return`*você não tem nível ._.*`
}

exports.lvlnoon = () => {
	return`*Ative primeiro o modo leveling!!!*`
}

exports.noregis = () => {
	return`*「❗REGISTRO❗」*\n\n*Olá ${pushname} para poder usar o bot você precisa se registrar primeiro!!!*\n\n*EXEMPLO:*\n\n*${prefix}rg nome|idade* \n*exemplo ${prefix}rg sayo|15*`
}

exports.rediregis = () => {
	return`*「❗」 VOCÊ JA SE REGISTROU*`
}

exports.stikga = () => {
	return`*「 ❌FALHOU❌ 」*\n\n*tente novamente!!*`
}

exports.pttr = () => {
	return`*Use assim ${prefix}ppt pedra,tesoura,papel\n\nEXEMPLO : ${prefix}ppt pedra*`
}


exports.linkga = () => {
	return`*❌link ou url invalida❌*`
}

exports.groupo = () => {
	return`*「❕PENAS EM GRUPO❕」*\n\n*Este comando so pode ser usado se o bot estiver em algum grupo!!*`
}

exports.ownerb = () => {
	return`*「❕CRIADOR❕」*\n\n*Somente o sayo pode usar 😁*`
}

exports.ownerg = () => {
	return`*「❕DONO DO GRUPO❕」*\n\n*Somente o criador do grupo pode usar esse comando!!*`
}

exports.admin = () => {
	return`*「❕ADIMIN❕」*\n\n*Esse comando e apenas para os admins do grupo!!`
}

exports.badmin = () => {
	return`*「❕ADMIN BOT❕」*\n\n*O bot precisa ser adm para poder usar este comando!!*`
}

exports.nsfwoff = () => {
	return`*「❕NSFW DESATIVADO❕」*\n\n *Ative o modo nsfw primeiro!!*`
}

exports.bug = () => {
	return`*「❕BUG❕」*\n\n*Seu bug|report foi enviado para meu criador!!  relatorios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*「❌ERROR❌」*\n\n*Formato errado ou o texto esta em branco!!*`
}

exports.clears = () => {
	return`*「 CHAT LIMPO✅」*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「❗REGISTRADO❗」*\n\n❕SEUS DADOS❕ \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱horário do seu registro\n┗⊱${time}\n\n┏━❉ *ID* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : *não se esquece de seu id*\n\n┏━⊱${prefix}menu\n┗⊱para a ver a lista de comandos`
}

exports.cmdnf = (prefix, command) => {
	return`Comando*${prefix}${command}* não registrado Digite *${prefix}menu* para ver a lista de comandos`
}

exports.owneresce = (pushname) => {
	return`*desculpe ${pushname} você não e o dono do bot*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${aha}*\n\n_NOTA : CONVERSE NO CHAT PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${ahb}*\n\n_NOTA : CONVERSE NO CHAT PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${ahc}*\n\n_NOTA : CONVERSE NO CHAT PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${ahd}*\n\n_NOTA : CONVERSE NO CHAT PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${ahe}*\n\n_NOTA : CONVERSE NO CHAT PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${ahf}*\n\n_NOTA : CONVERSE NO CHAT PARA OBTER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `
             ᴜ́sᴜᴀʀɪᴏ

➳ɴᴏᴍᴇ: ${pushname}
➳ᴛɪᴘᴏ: ${premi}
➳ɴᴜ́ᴍᴇʀᴏ: wa.me/${sender.split("@")[0]}
➳ɴɪ́ᴠᴇʟ: ${getLevelingLevel(sender)}
➳ᴅɪɴʜᴇʀᴏ: ${uangku}
➳xᴘ: ${getLevelingXp(sender)}
➳ᴘᴀᴛᴇɴᴛᴇ: ${role}
➳ᴛᴏᴛᴀʟ ᴅᴇ ᴜ́sᴜᴀʀɪᴏs ʀᴇɢɪsᴛʀᴀᴅᴏs: ${_registered.length}

╭═════ ≪ ➟❈➟ ≫ ═════
┃        ғɪɢᴜʀɪɴʜᴀ
┃════════════════
┃╼╾╼╾╼╾╼╾╼╾╼╾╼╾
┃═══════════════⊷❍
┃❍➣ * ${prefix}figu
┃❍➣ * ${prefix}toimg
╰══════════════⊷❍

╭═════ ≪ ➟❈➟ ≫ ═════
┃          ɴɪ́ᴠᴇʟ
┃════════════════
┃╼╾╼╾╼╾╼╾╼╾╼╾╼╾
┃═══════════════
┃❍➣ ❧${prefix}limit
┃❍➣ ❧${prefix}buylimit
┃❍➣ ❧${prefix}transferir
┃❍➣ ❧${prefix}dompet
┃❍➣ ❧${prefix}rank
┃❍➣ ❧${prefix}level
╰══════════════⊷❍

╭═════ ≪ ➟❈➟ ≫ ═════
┃         ɢʀᴜᴘᴏ
┃════════════════
┃╼╾╼╾╼╾╼╾╼╾╼╾╼╾
┃${prefix}add
┃${prefix}banir
┃${prefix}hidetag
┃${prefix}tagall
┃${prefix}apagar
┃${prefix}listadmin
┃${prefix}online
┃${prefix}grupo abrir/fechar
┃${prefix}linkgp
┃${prefix}promover
┃${prefix}rebaixar
┃${prefix}setname
┃${prefix}setdesc
┃${prefix}setfoto
┃${prefix}leveling 1/0
┃${prefix}welcome 1/0
┃${prefix}nsfw 1/0
┃${prefix}antlink 1/0
┃${prefix}antifake 1/0
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾

╭═════ ≪ ➟❈➟ ≫ ═════
┃       ғᴇʀʀᴀᴍᴇɴᴛᴀs
┃════════════════
┃╼╾╼╾╼╾╼╾╼╾╼╾╼╾
┃${prefix}engrossar
┃${prefix}esquilo
┃${prefix}lento
┃${prefix}bass
┃${prefix}tomp3
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾

╭═════ ≪ ➟❈➟ ≫ ═════
┃         ɴᴜ́ᴠᴇᴍ
┃════════════════
┃╼╾╼╾╼╾╼╾╼╾╼╾╼╾
┃${prefix}addsticker
┃${prefix}getsticker
┃${prefix}stickerlist
┃${prefix}addvideo
┃${prefix}getvideo
┃${prefix}videolist
┃${prefix}addimage
┃${prefix}getImage
┃${prefix}imagelist
┃${prefix}addaudio
┃${prefix}getaudio
┃${prefix}audiolist
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾

╭═════ ≪ ➟❈➟ ≫ ═════
┃          ᴄʀɪᴀᴅᴏʀ
┃════════════════
┃╼╾╼╾╼╾╼╾╼╾╼╾╼╾
┃${prefix}darlimit
┃${prefix}tm
┃${prefix}setreply
┃${prefix}clone
┃${prefix}setfotobot
┃${prefix}setprefix
┃${prefix}limpar
┃${prefix}setmemlimit
┃${prefix}event 1/0
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾

      ɪɴғᴏ ᴅᴏ ʙᴏᴛ
╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
┃nome : ${client.user.name}${a}
┃navegador : ${client.browserDescription[1]}${a}
┃servidor : ${client.browserDescription[0]}${a}
┃versão : ${client.browserDescription[2]}${a}
┃velocidade : ${process.uptime()}${a}
┃celular : ${client.user.phone.device_manufacturer}${a}
┃versão do whatsapp : ${client.user.phone.wa_version}${a}
╰
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 🥳 LEVEL UP 🥳 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Patente*: ${role}
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} Seu limit acabou*\n*Para conseghir mais limit compre ou passe de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 SEU LIMIT 」*
*seu limite restante : ${limitCounts}*

NOTA : para obter mais limite. você pode passar de nível ou comprar`
}

exports.satukos = () => {
	return`*Use assim : 1 para ativar ou 0 para desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 DINHERO 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinhero* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM 」*

*Número* : ${pnom}
*Expira em* : 30 DIAS\n*Obrigado por ter comprado premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM 」*

*Número* : ${hnom}
*Expira em* : AGORA\n*Obrigado por ter comprado o premium volte dps para comprar novamente :D*`
}

exports.premon = (pushname) => {
	return`DESCULPE ${pushname} VOCÊ NÃO É UM USUARIO PREMIUM`
}

