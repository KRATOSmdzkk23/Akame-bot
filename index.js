
//TRADUZIDO BY SAYO



const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const got = require('got')
const gis = require('g-i-s')
const os = require('os')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { antiSpam } = require('./lib/antispam')
const { donasi } = require('./lib/donasi')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, } = require('./lib/register.js')
const { fetchJson } = require('./lib/fetcher')
const { addLimit, getLimit } = require('./lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const { recognize } = require('./lib/ocr')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:MEU CRIADOR🙈\n' 
            + 'ORG: SAYO;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=556181496039:+55 61 8149-6039\n' 
            + 'END:VCARD' 
blocked = []   
fake = 'Akame'
prefix = '#'
limitawal = 30
memberlimit = 0
ator = 'SAYO'
namo = 'SAYO'
cr = '*AKAME-BOT*'
/*************************************/
LeysKey = 'dappakntlll' //beli di https://leyscoders-api.herokuapp.com
/******** OWNER NUMBER**********/
const ownerNumber = ["556181496039@s.whatsapp.net","556181496039@s.whatsapp.net"] 
/************************************/

       
/*********** LOAD FILE ***********/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const sotoy = JSON.parse(fs.readFileSync('./data/sotoy.json'))
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const antifake = JSON.parse(fs.readFileSync('./database/group/antifake.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const { help, m18 } = require('./help')
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
/*********** END LOAD ***********/

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { cdd, ammOff, crfig, crlv, crtt, crh } = infos

    //TTT 
    
    const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

/********** FUNCTION ***************/


const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}

if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

		const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        } 
        
		
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 


        //somtoy
        const soto = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
/********** SCAN QR CODE ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('ampibi gaming','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./akame.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./akame.json') && client.loadAuthInfo('./akame.json')
client.connect();


client.on('group-participants-update', async (anu) => {
	if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				client.sendMessage(mdata.id, '👮🏻‍♀️Números fake aqui não "amigo" 👮🏻‍♀️️', MessageType.text)
				reply(`Volte quando comprar um chip 👩🏻‍💻`)
								setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}
if (!welkom.includes(anu.jid)) return
      try {
         const mdata = await client.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = client.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await client.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Oi ${namaewa}\n◪ Bem-vindo(a):\n├─ ${mdata.subject}\n\n├─ Intro\n├─ ❏ Nome: \n├─ ❏ Idade: \n├─ ❏ Cidade natal: \n├─ ❏ Hobby: \n├─ ❏ Gênero: \n└─ ❏ Número: ${num.replace('@s.whatsapp.net', '')}\nSeja bem-vindo(a)~~\n${namaewa}`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         } else if (anu.action == 'remove') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `◪ Sayonara ${namaewa}\n◪ Saiu de:\n${mdata.subject}\n\n└─ ❏ Número: ${num.replace('@s.whatsapp.net', '')}\nJa vai tarde baka kkkk~~`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Parabés por se tornar um adm do grupo!&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ PROMOVER DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensagem: @${num.split('@')[0]} se tornou um administrador do grupo, parabéns`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=${namaewa} virou membro comum&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ DESPROMOVER DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─  @${num.split('@')[0]} Não e mais um administrador do grupo`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})


        client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
	    
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
               const isAntiFake = isGroup ? antifake.includes(from) : false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
		    const isAntiLink = isGroup ? antilink.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			client.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
	        /*****************END SCURITY FEATURE ********/


				
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
		
			
			//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     if (levelRole <= 3) {
   	         role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     } else if (levelRole <= 5) {
   	         role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     } else if (levelRole <= 7) {
   	         role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     } else if (levelRole <= 8) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 9) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 10) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 11) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 12) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 13) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 14) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 14) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 15) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 16) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 17) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 18) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 19) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 20) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 21) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 22) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 23) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'
   	     } else if (levelRole <= 24) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'   	         
   	     } else if (levelRole <= 25) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'    
   	     } else if (levelRole <= 26) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'   	     
   	     } else if (levelRole <= 27) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'   	         
   	     } else if (levelRole <= 28) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'    
   	     } else if (levelRole <= 29) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'     
   	     } else if (levelRole <= 30) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'         
   	     } else if (levelRole <= 31) {
   	         role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'   	         
   	     } else if (levelRole <= 32) {
   	         role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'    
   	     } else if (levelRole <= 33) {
   	         role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'     
   	     } else if (levelRole <= 34) {
    	        role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'            
    	    } else if (levelRole <= 31) {
   	         role = '👹ʟᴇɴᴅᴀ👹'   	         
   	     } else if (levelRole <= 32) {
   	         role = '👹ʟᴇɴᴅᴀ👹'    
   	     } else if (levelRole <= 33) {
   	         role = '👹ʟᴇɴᴅᴀ👹'     
   	     } else if (levelRole <= 34) {
    	        role = '👹ʟᴇɴᴅᴀ👹'                
   	    }
   
      	
        			var premi = '🧍🏻‍♂️membro comum🧍🏻‍♂️'
         			if (isOwner) {
      				premi = '🧝🏻‍♂️ᴄʀɪᴀᴅᴏʀ🧝🏻‍♂️'
       			}
				
				
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`❗seu limit acabou❗\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			//funtion limited
            const isLimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	       if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`Desculpe más terei que sair do seu grupo fale com meu criador primeiro... \n\nlimit ${memberlimit}`)
						setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("5")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
 	   	
 
			     if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
		if (budy.includes("://youtu.be/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
    	if (budy.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}

        if (budy.includes("Https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
	   if (budy.includes("http:/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
	if (budy.includes("https:/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	            
	
	        if (budy.includes("https://t.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("peça permissão proxima vez")
		}, 0)
	}
	
	        if (budy.includes("https://wa.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("proxima vez peça permissão aoa ademir")
		}, 0)
	}
	
	        if (budy.includes(" *TED ou PIX*")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("tchau nota fake")
		}, 0)
	}
	
	        if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("vai postar merda de tiktok em outro lugar")
		}, 0)
	}
	
		 if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("vai postar kwaii na casa do caralho seu mendigo")
		}, 0)
	}

	            if (messagesC.match('ผิดุท้่เึางืผิดุท้่เึาง')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir voçê')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Trava detectada${sender.split('@')[0]} você será expulso do grupo em 3 segundos`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3')
		        }, 0)
	            }
	            
	            
	            if (messagesC.match('৭৭৭৭৭৭৭৭')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir voçê')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Trava detectada ${sender.split('@')[0]} você será expulso do grupo em 3 segundos`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3')
		        }, 0)
	            }
	            if (messagesC.match('๒๒๒๒๒๒๒๒')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir voçê')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Trava detectada ${sender.split('@')[0]} você será expulso do grupo em 3 segundos`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3')
		        }, 0)
	            }
	            if (messagesC.match('๑๑๑๑๑๑๑๑')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir voçê')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Trava detectada ${sender.split('@')[0]} você será expulso do grupo em 3 segundos`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3')
		        }, 0)
	            }
 	       
 	     
 	           //function balance
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 90
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
           	
             //kolor
		
         if (isCmd && antiSpam.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return reply('「 ❗ 」Sitema de anti-spam「 ❗ 」 *espere 5 segundos para usar o comando*')}
        
        if (isCmd && antiSpam.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return reply('「 ❗ 」Sitema de anti-spam「 ❗ 」 *espere 5 segundos para usar o comando*')
        }
			//detector media
			
			const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	       
			
//_VISUALIZA AS MENSAGENS 
client.chatRead(from)
			ccolors = ['red','white','black','blue','yellow','green']
			
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		    if (isCmd && !isOwner) antiSpam.addFilter(from)
		    if (!isGroup && !isCmd) console.log(color(time, 'white'), color('[ PV ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'red'))
            if (isGroup && !isCmd) console.log(color([time], 'white'), color('[  GRUPO  ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'red'), 'in', color(groupName, 'white'))
            if (!isGroup && isCmd) console.log(color([time], 'white'), color('[ COMANDO ]', 'green'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'red'))
            if (isGroup && isCmd) console.log(color([time], 'white'), color('[ COMANDO ]', 'green'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'red'), 'in', color(groupName, 'white'))
                               
            switch(command) {
				//apivinz 
				
				//daftar 
				//daftar 
				case 'daftar':
				case 'rg':                
				        if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('A idade precisa ser um número!!')
                if (namaUser.length >= 30) return reply(`seu nome e muito grande!!!`)
                if (umurUser > 40) return reply(`Precisa ter no maximo 40 anos`)
                if (umurUser < 12) return reply(`Precisa ter no mínimo 12 anos`)
                try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://dappa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com		
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(namaUser)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${imglu}`)
                    await client.sendMessage(from, buff, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                   } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, buff, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                   }
              				break			
				
				//terhambar 
		 
				
        
				//auto respond 


	  			case 'info':
	  				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)	    				    					     	
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*CRIADOR* : *SAYO*\n*Número do Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total de contatos bloqueados* : ${blocked.length}\n*Bot esta ativo desde* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					
						case 'infogp':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
				

case 'spam':
    			if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)	    				    					     	
                    if (args.length < 1) return reply(`Use assim:  exemplo : ${prefix}spam 556181496039 corno`)
                    if (args[0].startsWith('08')) return reply('coloque o número do país exemplo : 55')
                    if (args[0].startsWith(`${ownerNumber}`)) return reply(`Eu não posso enviar spam para meu criador ${namaowner} 😞`)
                    mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    const kontul = body.slice(8)
                    if (kontul.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                    var nomor = mek.participant
                    const busah = `*[  ⚠️SPAM⚠️  ]*\nNúmero : @${nomor.split('@s.whatsapp.net')[0]}\nSpam: ${kontul}`
                    var options = {
                    text: busah,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    client.sendMessage(`${mansed}`, options, text, {quoted: mek})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    reply('Spam enviado com sucesso')
                    break
					
case 'help':
case 'menu':
case '?':
case 'ajuda':
case 'comandos':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const uangku = checkATMuser(sender)
wew = fs.readFileSync(`./src/akame.mp4`)
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "✩ akame-bot ☆", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: help(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client, process, kyun ) })
break

                 case 'menugp': 
                  if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                        
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *GRUPO MENU*
│
└◪› ${prefix}welcome [1/0]
*╠◪* ${prefix}nsfw [1/0]          
*╠◪* ${prefix}antilink [1/0]
*╠◪* ${prefix}antitrava [1/0]
*╠◪* ${prefix}antifake [1/0]
*╠◪* ${prefix}leveling [1/0]
*╠◪* ${prefix}promover [@tag]
*╠◪* ${prefix}rebaixar [@tag]
*╠◪* ${prefix}tagall
*╠◪* ${prefix}hidetag
*╠◪* ${prefix}linkgp
*╠◪* ${prefix}listadmin
*╠◪* ${prefix}online
*╠◪* ${prefix}grupo abrir/fechar
*╠◪* ${prefix}setname
*╠◪* ${prefix}setdesc
*╠◪* ${prefix}setfoto
*╠◪* ${prefix}add [55]
*╠◪* ${prefix}ban [@tag]
*╠◪* ${prefix}setname
*╠◪* ${prefix}setdesc
*╠◪* ${prefix}setpp
*╠◪* ${prefix}listadmin
*╠◪* ${prefix}linkgc
*╠◪* ${prefix}apagar
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					case 'menumk': 
                  if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                        
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *MENU MAKER*
│
└◪› ${prefix}crosslogo
*╠◪* ${prefix}flowertext
*╠◪* ${prefix}glowtext
*╠◪* ${prefix}skytext
*╠◪* ${prefix}cslogo
*╠◪* ${prefix}lithgtext
*╠◪* ${prefix}crismes
*╠◪* ${prefix}matrix
*╠◪* ${prefix}breakwall
*╠◪* ${prefix}bneon
*╠◪* ${prefix}dropwater
*╠◪* ${prefix}leavest
*╠◪* ${prefix}logobp
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					case 'menusp': 
					 if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *MENU SIMPLES*
│
└◪› ${prefix}figu
*╠◪* ${prefix}st
*╠◪* ${prefix}attp
*╠◪* ${prefix}play [nome]
*╠◪* ${prefix}img [nome]
*╠◪* ${prefix}img2 [nome]
*╠◪* ${prefix}akame [msg]
*╠◪* ${prefix}clone [@tag]
*╠◪* ${prefix}metadinha
*╠◪* ${prefix}tts [pt msg]
*╠◪* ${prefix}spam [nmr]
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break										
					
					case 'menugm': 
					 if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *MENU DE JOGOS*
│
└◪› ${prefix}slot
*╠◪* ${prefix}slot2
*╠◪* ${prefix}cassino
*╠◪* ${prefix}ppt [pedra/papel/tesoura]
*╠◪* ${prefix}ttt [easy/normal/hard/impossible]
*╠◪* ${prefix}roleta
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					case 'menufs': 
					 if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *MENU DE FERRAMENTAS*
│
└◪› ${prefix}engrossar [marque o aúdio]
*╠◪* ${prefix}lento [marque o aúdio]
*╠◪* ${prefix}esquilo [marque o aúdio]
*╠◪* ${prefix}bass [marque o aúdio]
*╠◪* ${prefix}toimg [marque a figurinha]
*╠◪* ${prefix}tomp3 [marque o vídeo]
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					case 'menulvl': 
					 if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *MENU DE NÍVEL/LIMIT*
│
└◪› ${prefix}limit
*╠◪* ${prefix}level
*╠◪* ${prefix}dompet
*╠◪* ${prefix}buylimit
*╠◪* ${prefix}transfer
*╠◪* ${prefix}rank
*╠◪* ${prefix}tttrank
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					case 'menufun': 
					 if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *MENU DE INTERAÇÃO*
│
└◪› ${prefix}gado
*╠◪* ${prefix}gay
*╠◪* ${prefix}pau
*╠◪* ${prefix}gostosa
*╠◪* ${prefix}gostosa2
*╠◪* ${prefix}morte
*╠◪* ${prefix}casal
*╠◪* ${prefix}sn
*╠◪* ${prefix}chance
*╠◪* ${prefix}tapanab
*╠◪* ${prefix}beijo
*╠◪* ${prefix}fatality
*╠◪* ${prefix}triste
*╠◪* ${prefix}carinho
*╠◪* ${prefix}abraço
*╠◪* ${prefix}ship
*╚═════════════════❀*


❏ *RANKS*
│
└◪› ${prefix}topgay
*╠◪* ${prefix}topgado
*╠◪* ${prefix}rankfeio
*╠◪* ${prefix}rankfofo
*╠◪* ${prefix}gostosas
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					case 'infomenu': 
					 if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *MENU DE INTERAÇÃO*
│
└◪› ${prefix}info
*╠◪* ${prefix}infome
*╠◪* ${prefix}owner
*╠◪* ${prefix}bateria
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					
					case 'menunv': 
					 if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *GUARDAR ARQUIVOS NA NÚVEM*
│
└◪› ${prefix}addsticker
*╠◪* ${prefix}getsticker
*╠◪* ${prefix}stickerlist
*╠◪* ${prefix}addvideo
*╠◪* ${prefix}getvideo
*╠◪* ${prefix}videolist
*╠◪* ${prefix}addimage
*╠◪* ${prefix}getImage
*╠◪* ${prefix}imagelist
*╠◪* ${prefix}addaudio
*╠◪* ${prefix}getaudio
*╠◪* ${prefix}audiolist
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					
					case 'menusy': 
		         reply(`[❗] Olá ${pushname} aguarde⏳`)                 
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "556181496039@s.whatsapp.net"
		    cuy = "556181496039@s.whatsapp.net"
                    menusu = `
❏ *🤠MEU CRIADOR🤠*
│
└◪› ${prefix}tm
*╠◪* ${prefix}darlimit
*╠◪* ${prefix}setfotobot
*╠◪* ${prefix}setprefix
*╠◪* ${prefix}limpar
*╠◪* ${prefix}setmemlimit
*╠◪* ${prefix}event 1/0
*╚═════════════════❀*` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
										
         
           
           case 'iplog':
           if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
				if (args.length < 1) return reply('Cade o ip ? 👩🏻‍💻')				         
			    reply(ind.wait())
                    teks = body.slice(7)
                    anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${teks}`)
			        ipl = `
╔═╦═══• •✠•❀•✠ • •════╗
║✧ུ║     「 DADOS DO IP 」                     
║✧ུ║
║✧ུ║ུᴄɪᴅᴀᴅᴇ : *${anu.city}*
║✧ུ║ུʟᴀᴛɪᴛᴜᴅᴇ : *${anu.latitude}*
║✧ུ║ུʟᴏɴɢᴛɪᴛᴜᴅᴇ : *${anu.longitude}*
║✧ུ║ུʀᴇɢɪᴀᴏ : *${anu.region_name}*
║✧ུ║ུᴜғ : *${anu.region_code}*
║✧ུ║ུᴛɪᴘᴏ : *${anu.type}*
║✧ུ║ུᴄᴇᴘ : *${anu.zip}*
║✧ུ║ུʟᴏᴄᴀʟɪᴅᴀᴅᴇ : *${anu.location.geoname_id}*
║✧ུ║ུᴄᴀᴘɪᴛᴀʟ : *${anu.location.capital}*
║✧ུ║ུᴅᴅᴅ : *${anu.location.calling_code}*
║✧ུ║ུᴘᴀɪs : *${anu.location.country_flag_emoji}*
╚═╩═══• •✠•❀•✠ • •════╝
`
			        reply(ipl)
					break
					
					//bateria
					
					case 'battery':
					case 'bateria':
  const charg = ["carregando","carregando","carregando","carregando","carregando","desconectado"]
chargo = charg[Math.floor(Math.random() * charg.length)]
let batans = global.batrei[global.batrei.length - 1]
  batter =`
  •🔋 : ${batans}%
  • 🔌 : ${chargo}`
  client.sendMessage(from, batter, text, {quoted: mek})
  break
					
					case 'bcep':
				           if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					if (args.length < 1) return reply('Cade o cep ? 👩🏻‍💻')
			    	 reply(ind.wait())
					lxrd = body.slice(6)
                    data = await fetchJson(`https://viacep.com.br/ws/${lxrd}/json/`, {method: 'get'})                  
                    kiny = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${data.cep} \n\n ➸ *ENDEREÇO:* ${data.logradouro}\n\n ➸ *COMPLEMENTO:* ${data.complemento} \n\n ➸ *BAIRRO:* ${data.bairro} \n\n ➸ *LOCALIDADE:* ${data.localidade} \n\n ➸ *UF:* ${data.uf}\n\n ➸ *DDD:* ${data.ddd}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    await limitAdd(sender)
                    break
        

case 'infome':
case 'perfil':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
await limitAdd(sender)
const namaUser2 = getRegisterName(sender)
const umurUser2 = getRegisterAge(sender)
const serialUser2 = createSerial(20)
const uangku2 = checkATMuser(sender)
const userXp2 = getLevelingXp(sender)
const reqXp2  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pf = 
`
  ‣ Número: @${sender.split("@")[0]}
  ‣ Registrado: ✔
  ‣ Idade: ${umurUser2}
  ‣ Nome de registro: ${namaUser2}  
  ‣ Tipo: ${premi}
  ‣ Level: ${getLevelingLevel(sender)}
  ‣ XP: ${userXp2}
  ‣ Dinhero: ${uangku2}
  ‣ Patente: ${role}
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serialUser2}
`
its = await getBuffer (ppimg)
client.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
break

case 'm18':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (!isNsfw) return reply(ind.nsfwoff())
costum(m18(pushname, prefix), text, tescuk, crh)
break
		
				
		         		case 'admin':
         	   case 'owner':
         	   case 'criador':
         	   case 'creator':
         	         if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)   	   
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Esse é o número do meu criador 😎, não envie spam',MessageType.text, { quoted: mek} )
					break    
					
				case 'leaderboard':
				case 'lb':
				case 'rank':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *RANK DE NÍVEL* ]----\n\n'
                let leaderboarduang = '-----[ *💰RANK DE DINHERO💰* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *NÍVEL*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *DINHERO*: _${uang[i].uang}_\n┗⊱ *LIMIT*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal ${len} user untuk bisa mengakses database`)
                }
				break
				case 'limit':		
				   if (!isRegistered) return reply(ind.noregis())		    		
			     	await limitAdd(sender)
				   checkLimit(sender)
					break 
				case 'darlimit': 				
		        if (!isOwner) return reply(ind.ownerb())
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`Precisa dar no minímo 1 limit`)
                if (isNaN(jmla)) return reply(`[❗] USE ASSIM\n ${prefix}darlimit @556181496039 5`)
                if (!nomerr) return reply(`[❗] USE ASSIM\n ${prefix}darlimit @556181496039 5`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `[❗] SUCESSO AO ADICIONAR LIMIT NO ID : ${createSerial(8)}\nhorário ${moment().format('DD/MM/YY HH:mm:ss')}\n
*「 🎁DOAÇÃO BEM SUCEDIDA🎁 」*

• Usúario : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`[❗] Desculpe ${pushname},  este  ${nomerr} número não está registrado no bot...`)
                        }
                break            	                             	                                                              
                
                
                
                case 'image2':
                case 'img2':
                	if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)				
                if (args.length < 1) return reply(`o que você está procurando mano?\nExemplo${prefix}image nakano miku`)
                reply(ind.wait())
                const gimg = args[0]
                gis(gimg, async (error, result) => {
                for (var i = 0; i < (result.length < 3 ? result.length : 3); i++) {
                var get = got(result[i].url)
           	    var stream = get.buffer()
                stream.then(async (images) => {
                await client.sendMessage(from, images, image, {quoted: mek})
                })
          	    }
    		    })
        	    
        	    break
               
case 'img':
case 'image':
case 'imagem':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)									
if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
client.updatePresence(from, Presence.composing)
	reply(ind.wait())
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break
				
				case 'akame':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (args.length < 1) return reply(`Use ${prefix}akame texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 😈 (converse cmg)')
client.sendMessage(from, `${anu.success} 😈`, text, {quoted: mek})
} catch {
reply(dpa.error)
}
break
				
    case 'transfer':
    case 'transferi':
				case 'transferir':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)							
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('[❗] PRECISA SER UM NÚMERO')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`[❗] você não tem dinheiro suficiente para fazer uma transferência, você precisa ter no minímo 100 de dinhero`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('556181496039@s.whatsapp.net', fee)
                reply(`💱TRANSFERÊNCIA💱\n\n[❗] ᴛʀᴀɴsғᴇʀᴇ̂ɴᴄɪᴀ ʙᴇᴍ sᴜᴄᴇᴅɪᴅᴀ\n\ntransferidor : +${sender.split("@")[0]}\nrecebidor : +${tujuan}\nvalor da transferência : ${jumblah}\nimposto : ${fee}`)
                break
                       
                case 'dompet':          
	  			case 'meudinhero':
	  			if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)	  							
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				
				case 'buylimit':				
					if (!isRegistered) return reply(ind.noregis())		    		
			     	await limitAdd(sender)							
				payout = body.slice(10)
				if (args.length < 1) return reply('[❗] Coloque a quantidade')		
				if(isNaN(payout)) return await reply('[❗] O limite deve ser um número!!')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do limit : 300`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`❰ᴄᴏᴍᴘʀᴀ ʙᴇᴍ sᴜᴄᴇᴅɪᴅᴀ❱\n\n*vendedor* : akame\n*comprador* : ${pushname}\n*quantidade da compra* : ${payout} \n*preço do limitt* : ${koinPerlimit}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}\n\ncompra bem sucedida com o id : \n${createSerial(15)}`)
				} 
				break
			
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
await limitAdd(sender)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ptbr.stick())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('AKAME-BOT', 'sayo')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ptbr.stick())
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(ind.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('AKAME-BOT', 'sayo')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ind.stick())
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(ind.wait())
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ind.stick())
exec(`webpmux -set exif ${addMetadata('AKAME-BOT', 'sayo')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply(ind.stick())
client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'st':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('AKAME-BOT', 'sayo')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(ptbr.stick())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(ptbr.waitgif())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('AKAME-BOT', 'sayo')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
					
				case 'tts':				
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
				if (args.length < 1) return client.sendMessage(from, '[❗] Coloque o codígo da lingua do país exemplo : pt de portughês', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cade o texto?...', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('O texto e muito grande!!! bote um texto meno')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
				break

				case 'toimg':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
				if (!isQuotedSticker) return reply('[❗] marque a figurinha!!!')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
						fs.unlinkSync(ran)
					})
					
				break 
				
         		case 'play':   
				if (!isRegistered) return reply(ind.noregis())//By sayo...
		        if (isLimit(sender)) return reply(ind.limitend(pusname)) 
			    await limitAdd(sender)              
				reply(ind.wait())
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*❗MUSÍCA ENCONTRADA!!!❗*\n\ntitulo : ${anu.result.title}\nfonte : ${anu.result.source}\ntamanho : ${anu.result.size}`				
				buffer = await getBuffer(anu.result.thumbnail)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				reply(`[❗] BAIXANDO E ENVIANDO SUA MÚSICA...`)                             
                reply(`[❗] ESPERE...`)
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)				                
				break
				
				//*******************GRUPO*********************//
				
				case 'hidetag':                
                if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					
					break
					
				case 'add':
						if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você quer adicionar?')
					if (args[0].startsWith('08')) return reply('Coloque o codígo do país exemplo: 55')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('[❌] Deu error talvez o número e privado')
					}
				break 
				
				case 'attp':
  if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp Levi`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
client.sendMessage(from, attp2, sticker, {quoted: mek})
break

 


				
				case 'level':
                if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *NÍVEL* ❉━━\n┣⊱ *Nome* : ${pushname}\n┣⊱ Número : wa.me/${sender.split("@")[0]}\n┣⊱ XP :  ${userXp}/${requiredXp}\n┣⊱ Seu nível : ${userLevel}\n┣⊱ Patente : ${role}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break 
				
				case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`Desculpe ${pushname} o modo evento não está ativado no grupo...`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`Esse e pra vc  ${one} 🙈`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*${pushname} minérou⛏️ na mina e conseguiu* ${mining} de xp...*`)
                      }
                    
                    
					break
				case 'grup':
				case 'group':
				case 'grupo':
				case 'gp':
						if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'abrir') {
					    reply(`*${pushname} ⚠️ABRIU O GRUPO⚠️*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`${pushname} ⚠️FECHOU O GRUPO⚠️`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
				
						
				case 'dorothy':
						if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'a') {
					    reply(`*❗️GRUPO ABERTO❗*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'f') {
						reply(`*❗GRUPO ABRE AMANHÃ AS 6:00❗*️`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
				
				case 'setname':
				case 'mudarnome':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '[❗] SUCESSO AO MUDAR O NOME DO GRUPO ✔', text, {quoted: mek})
					break
                case 'setdesc':
                case 'mudardesc':
                case 'mudardescrição':
                	if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '[❗] SUCESSO AO MUDAR A DESCRIÇÃO DO GRUPO ✔', text, {quoted: mek})
					break
					
           case 'demote':
           case 'despromover':
           case 'rebaixar':
           			if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)	
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque quem você quer tirar o adm!!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Você não e mais um administrador*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} Você não e mais um administrador🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break

				case 'promover':					
				case 'promote':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque quem você quer tirar o adm')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Agora e um administrador do grupo :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} *Agora e um administrador do grupo* (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
					
			     	case 'kick':
			     	case 'ban':
			     	case 'banir':
			     	if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('[❗] Quem você quer banir do grupo?')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Desculpe mas você será banido :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Desculpe mas você será banido @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
					
				case 'listadimin':
				case 'listadmin':
				case 'admins':
				case 'adms':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
					if (!isGroup) return reply(ind.groupo())
					teks = `esses são os adms do grupo *${groupMetadata.subject}*\ntotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
				case 'welcome':
				case 'bemvindo':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('1 para ativar e 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*[❗] Já esta ativado...')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ ✅ ❭ ATIVADO COM SUCESSO O MODO-BOAS VINDAS️ NESTE GRUPO')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ ❌ ❭ DESATIVADO COM SUCESSO O MODO-BOAS VINDAS️ NESTE GRUPO')
					} else {
						reply(ind.satukos())
					}
					break 
					
				case 'nsfw':
				case 'modohentai':
				case 'modhentai':
						if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('1 para ativar e 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('[❗] já esta ativado...')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ o adm ativou o hentai 😳')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ❌ ❭ o adm desativou o hentai 😢️')
					} else {
						reply(ind.satukos())
					}
				break
                case 'leveling':
                case 'farmlevel':
                if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)				
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 para ativar e 0 para desativar')
                if (args[0] === '1') {
                if (isLevelingOn) return reply('*[❗] ja esta ativado amigo...*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === '0') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
			
				case 'linkgc':
				case 'linkgp':
				case 'linkgrupo':
				case 'linkdogrupo':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
				    if (!isGroup) return reply(ind.groupo())
				    
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink do grupo *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        
					break
				case 'tagall':
				case 'marcartodos':
				case 'marcaall':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
			 	case 'apagar':
				case 'delete':
				case 'del':
				case 'd':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				break 
					
					
					case 'setreply':
					case 'mudareply':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)				
					if (!isOwner) return reply(ind.ownerb())
     client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`a resposta foi alterada com sucesso para : ${cr}`)
					
					break 
					
				    case 'clone':
				    case 'clonar':
				    if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					if (!isGroup) return reply(ind.groupo())					
					if (args.length < 1) return reply(' *[❗] MARQUE A PESSOA QUE O BOT VAI COPIAR!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do @${id.split('@')[0]} 😁`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
					
			  	case 'event':
			  	case 'evento':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('1 para ativar ou 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*[❗] já esta ativado* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ ✅ ❭ modo evento ativado com sucesso neste grupo...*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ ❌ ❭ modo evento desativado com sucesso neste grupo...*')
					} else {
						reply(ind.satukos())
					}
					break 
					
				case 'antilink':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.ownerg())
					if (args.length < 1) return reply('1 para ativar ou 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*[❗] ja esta ativado* !!!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ ✅ ❭ anti-link ativado com sucesso neste grupo...*')
						reply('*Atencao a todos os membros ativos deste grupo o anti-link esta ativado se você enviar algum link, você sera expulso do grupo*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ ❌ ❭ anti-link desativado com sucesso neste grupo...*')
					} else {
						reply(ind.satukos())
					}
					break															
					
					case 'antifake':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					try {
									
					 if (!isGroup) return reply(ind.groupo())
		  if (!isBotGroupAdmins) return reply(dpa.badmin)
				if (!isGroupAdmins) return reply(dpa.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
                
                	case 'antitrava':                					
				if (!isRegistered) return reply(ind.noregis())
		    	if (isLimit(sender)) return reply(ind.limitend(pusname))
			   	await limitAdd(sender)
		        if (!isGroup) return reply(ind.groupo())					
				if (args.length < 1) return reply('[❗] Adicionar parâmetros 1 para ativar e 0 para desativar')
				if (Number(args[0]) === 1) {
				if (isAntiVirtex) return reply(`[❗] O ${command} ja está ativado!!`)
				antivirtex.push(from)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				reply(`[❗] ${pushname} Ativou com sucesso o recurso ${command} neste grupo`)
				} else if (Number(args[0]) === 0) {
				if (!isAntiVirtex) return reply(`[❗] O ${command} ja está ativado!!`)
				antivirtex.splice(from, 1)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				reply(`[❗] ${pushname} Desativou com sucesso o ${command} neste grupo`)
				} else {
				reply('[❗] Adicionar parâmetros 1 para ativar e 0 para desativar')
				}
				break
				
				case 'setppbot':
				case 'setfotobot':
				case 'mudarfotodobot':
					if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Marque a foto`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigada pela nova foto de perfil😗')
					break 
					
                   				case 'setpp': 
                   				case 'setfoto': 
                   				case 'mudarfoto': 
                   				case 'setgpfoto': 
                   			if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)					
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('[✅] sucesso ao mudar a foto do grupo')
					break				
				case 'leave':
				case 'sair':
				if (!isGroup) return reply(ind.groupo())
		    	if (!isOwner) return reply(ind.ownerb()) 
				setTimeout( () => {
				client.groupLeave (from) 
				}, 2000)
				setTimeout( () => {
				client.updatePresence(from, Presence.composing) 
				client.sendMessage(from, 'Tchau, meu dono acabou de pedir pra mim sair 😢', text, {quoted: mek})
				}, 0)
				break
			
				case 'bc': 
				case 'tm': 
								
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('Cade a mensagem?')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ ᴀᴋᴀᴍᴇ ʙᴏᴛ ❯\n\n${body.slice(4)}`})
						}
						reply('[TM] de foto feita com sucesso ✔')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `❮ ᴀᴋᴀᴍᴇ ʙᴏᴛ ❯\n\n${body.slice(4)}`)
						}
						reply('[TM] feita com sucesso ✔')
					}
					break
					
					case 'bc2':
					case 'tm2':
        if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('cade a mensagem?')
				anu = await client.chats.all()
				broadcast = args.join(' ')
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				buff = await client.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				await client.sendMessage(_.jid, buff, image, {caption: `[❗ATENÇÃO❗]\n\n${broadcast}`, contextInfo: { mentionedJid: [sender] }})
				}
				} else {
				for (let _ of anu) {
				await client.sendMessage(_.jid, `[❗ATENÇÃO❗]\n\n${broadcast}`, text, { contextInfo: { mentionedJid: [sender] }})
				}
				reply('Transmissão feita ✅')
				}
			    break
					
					case 'limparchat':
					case 'clearall':
					case 'limpar':
					case 'limpa':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				
				case 'setprefix':
				case 'mudarprefix':
				case 'mudaprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`[❗]  PREFIX FOI ALTERADO PARA ➬ ❰ ${prefix} ❱`)
					break 
					
				case 'setmemlimit':
				case 'setlimitdemembros':
				case 'setlimit2':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('o limite deve ser um número')
                    memberlimit = args[0]
                    reply(`O limite de membros foi alterado para -----> ${memberlimit} <----`)
				break 
				
											case 'online': 
        		case 'listonline': 
        		case 'listaonline': 
        		case 'pessoasdogrupoonline':         		
        		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)				
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Lista dos usúarios online do grupo:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
				
				
				//tools 
				case 'tomp3':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)				
				client.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('Marque o vídeo...')
				reply(ind.wait())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('❌Deu error❌')
					buffer = fs.readFileSync(ran)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
				break 
				
				case 'slowmo':
				case 'lento':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				case 'esquilo':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				
				case 'gemok':
				case 'engrossar':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				
				case 'bass':                 
				case 'aumentabass':                 
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						checkLimit(sender)
					})
				break
				
				case 'getsticker':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					checkLimit(sender)
					break
					
				case 'stickerlist':
				case 'liststicker':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					teks = '*lista das figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					if (!isQuotedSticker) return reply('[❗] Marque a figurinha')
					svst = body.slice(12)
					if (!svst) return reply('[❗] qual e o nome da figurinha?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `[❗] figurinha guardada na nuvem 🔐\npara ver a lista de todas as figurinhas guardadas digite ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					if (!isQuotedAudio) return reply('[❗] Marque o aúdio')
					svst = body.slice(7)
					if (!svst) return reply('[❗] Qual e o nome do aúdio?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `[❗] aúdio guardado na nuvem 🔐\npara ver a lista de todos os aúdios guardados digite ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
					
				case 'getvn':
				checkLimit(sender)
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
					
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					teks = '*lista dos aúdios:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
					
				case 'addimage':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					if (!isQuotedImage) return reply('[❗] Marque a imagem')
					svst = body.slice(10)
					if (!svst) return reply('[❗] Qual e o nome da imagem?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `[❗] imagem guardada na nuvem 🔐\npara ver a lista de todas as imagens guardadas digite ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
					
				case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
					
				case 'imagelist':
				case 'listimage':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					teks = '*lista das imagens :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
					
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					if (!isQuotedVideo) return reply('[❗] Marque o vídeo')
					svst = body.slice(10)
					if (!svst) return reply('[❗] Qual e o nome do vídeo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `vídeo guardado na nuvem\npara ver a lista de vídeos guardados digite ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
					
					case 'bug':
		        if (!isOwner) return reply(dpa.ownerb)
				client.toggleDisappearingMessages(from)
				client.toggleDisappearingMessages(from)
				break
				case 'bug2':
				if (!isOwner) return reply(ind.ownerb())
				for (let i = 0; i < 9999; i++) {
				exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
				if (err) throw err
				console.log('🔥SUCESSO🔥')
				console.log('🔥') 
				})
				}
				break
					
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
					teks = '*lista dos vídeos :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
			
			//************ANIMES*****************//
			
			case 'metadinha':
                //[❗] case by DappaGanz
			
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${LeysKey}`) 
				cowo = await getBuffer(anu.result.male)
				client.sendMessage(from, cowo, image, {quoted: mek})
				cewe = await getBuffer(anu.result.female)
				client.sendMessage(from, cewe, image, {quoted: mek})
				
				break
				
				case 'ttt':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(ind.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('Opa, deixe seus amigos jogarem também, tente novamente em 8 minutos.')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
client.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (!isGroup) return reply(ind.groupo())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (!isGroup) return reply(ind.groupo())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'coord':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
tttset.playertest = sender
if (!isGroup) {
reply(ind.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 2005) + 2005
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 7005) + 7005
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 20000) + 20000
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 100000) + 100000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 705) + 705)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 2005) + 2005)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO AKAME-BOT 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO AKAME-BOT 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen					

case 'slot':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 5490
addLevelingXp(sender, ppg)
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝
                     

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
client.sendMessage(from, slott, text, {quoted: mek})
break

    case 'slot2':  //case by rimuru/nayla 
			slot = `╔════════════════════\n`
		    slot += `║╭───────────[ *SLOT* ]───\n`
			slot += `║│➻ ${slot11} ║ ${slot22} ║ ${slot33}\n`
			slot += `║│➻ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
		    slot += `║│➻ ${slot77} ║ ${slot88} ║ ${slot99}	\n`			  				    
		    slot += `║│➻ GAME : SLOT [ *NOVO* ]\n`
			slot += `║╰───────────────────\n`
			slot += `╚════════════════════\n`
			client.sendMessage(from, slot, text, {quoted: mek})
		    break

case "ppt":
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (args.length < 1) return reply(ind.pttr())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 3490
addLevelingXp(sender, ppg)
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é da akame"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`akame jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'cassino':
			   if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
			    reply(ind.wait)
			    const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
			    client.sendMessage(from, `[  🎰 | CASSINO ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy2}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nINFO : Se você obtiver 3 da mesma fruta, significa que você ganhou\n\nexemplo : 🍌 : 🍌 : 🍌<=====`, text, {quoted: mek})
			    await limitAdd(sender)
			    break

case 'amongus':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
client.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break


case 'chance':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
                client.updatePresence(from, Presence.composing)
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Sayo ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'cpf1':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
client.sendMessage(from, `CPF gerado: ${cpf}`, text, {quoted: mek})
break

//mini games, rate, random
case 'dado':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
client.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'caracoroa':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
client.sendMessage(from, cararoa, sticker, {quoted: mek})
break
               
case 'morte':
case 'death':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
reply(morte)
break
			
case 'sn':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Sayo é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
                   
case 'gadometro':
case 'gado':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
wew = fs.readFileSync(`./src/gado.jpg`)
gadop = `${Math.floor(Math.random() * 100)}`
teks = `Você é:\n\n${gado}`
client.sendMessage(from, wew, image, {quoted: mek, caption: teks})

break

case 'top5':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
try{

d = []
top1 = body.slice(5)
teks = `️‍Top 5${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'topgay':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
try{
d = []
top1 = body.slice(5)
teks = `🏳️‍🌈𝖗𝖆𝖓𝖐 𝖉𝖔𝖘 𝖒𝖆𝖎𝖘 𝖌𝖆𝖞🏳️‍🌈\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'gostosas':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
try{
d = []
top1 = body.slice(5)
teks = `𝐀𝐒 𝐌𝐀𝐈𝐒 𝐆𝐎𝐒𝐓𝐎𝐒𝐀𝐒𝐊𝐊𝐊\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'rankfofo':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
try{
d = []
top1 = body.slice(5)
teks = `𝙾𝚂 𝙼𝙰𝙸𝚂 𝙵𝙾𝙵𝙾𝚂👉👈\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧😳 @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'rankfeio':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
try{
d = []
top1 = body.slice(5)
teks = `👹 𝚁𝚊𝚗𝚔 𝚍𝚘𝚜 𝚖𝚊𝚒𝚜 𝚏𝚎𝚒𝚘𝚜𝙺𝙺𝙺𝙺𝙺𝙺\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `👹❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'topgado':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
try{
d = []
top1 = body.slice(5)
teks = `𝙾𝚂 𝙼𝙰𝙸𝚂 𝙶𝙰𝙳𝙾𝚂 𝙳𝙾 ??𝚁𝚄𝙿𝙾\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧ 🐂@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
     
case 'rola':
case 'pau':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
                random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
wew = fs.readFileSync(`./src/pau.jpg`)
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
teks = `Seu pau tem ${random}cm\n\n${pp}`
client.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break
   
case 'gay':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
                random = `${Math.floor(Math.random() * 100)}`
boiola = random
wew = fs.readFileSync(`./src/gay.jpg`)
if (boiola < 20) {bo = 'hmm... você é hetero 😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'}  else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né???'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'}
teks = `Você é ${random}% Gay\n\n${bo}`
client.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break
case 'gostosa':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
                random = `${Math.floor(Math.random() * 100)}`
boiola = random
wew = fs.readFileSync(`./src/gostosa.jpg`)
if (boiola < 20) {bo = 'Fei pra caralho👹KKKKKKKKKKKKK'} else if (boiola == 21 ) {bo = 'mt feio bixo👹??'} else if (boiola == 23 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 24 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 25 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 26 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 27 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 28 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 29 ) {bo = 'mt feio bixo👹??'} else if (boiola == 30 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 31 ) {bo = 'você é aceitável 🧐'} else if (boiola == 32 ) {bo = 'você é aceitável 🧐'} else if (boiola == 33 ) {bo = 'você é aceitável 🧐'} else if (boiola == 34 ) {bo = 'você é aceitável 🧐'}  else if (boiola == 35 ) {bo = 'você é aceitável 🧐'} else if (boiola == 36 ) {bo = 'você é aceitável 🧐'} else if (boiola == 37 ) {bo = 'você é aceitável 🧐'} else if (boiola == 38 ) {bo = 'você é aceitável 🧐'} else if (boiola == 39 ) {bo = 'você é aceitável 🧐'} else if (boiola == 40 ) {bo = 'você é aceitável 🧐'} else if (boiola == 41 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 42 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 43 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 44 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 45 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 46 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 47 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 48 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 49 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 50 ) {bo = 'GOSTOSAKKKKKKKKKKKK'} else if (boiola > 51) {bo = 'Passa o zap gostosa 😳'}
teks = `Você é ${random}% Gostosa\n\n${bo}`
client.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break

case 'roleta':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
                ppg = Math.floor(Math.random() * 13) + 3490
                ppg2 = 0 - (Math.floor(Math.random() * 10000) + 10000)
                addLevelingXp(sender, ppg)
                addLevelingXp(sender, ppg2)               
                const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["roleta1","roleta2","roleta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./src/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 2300)
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
setTimeout( () => {
reply(`Você morreu e perdeu ${ppg2} de xp!!!`)
}, 2300)
}if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
client.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
client.sendMessage(from, morte, text, {quoted: mek})
}, 2200)
break



case 'casal':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
 jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Meus cálculos dizem que @${akuu.jid.split('@')[0]} e @${diaa.jid.split('@')[0]} possuem grande chance de namorar, apenas aceitem o destino...`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
					
 
 
// novos



case 'fatality':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('mencione alguém!')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
wew = fs.readFileSync('./src/fatality.mp4');
yhb = `fatality ☠️` 
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: yhb})
break
case 'beijo':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('quem você quer beijar?')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
wew = fs.readFileSync('./src/kiss.mp4');
yhb = `${pushname}?😼`
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: yhb})
break

case 'abraço':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('em quem você quer dar um abraço?')
wew = fs.readFileSync('./src/abraço.mp4');
yhb = `fofo`
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: yhb})
break
case 'vergonha':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
wew = fs.readFileSync('./src/vergonha.mp4');
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'triste':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
wew = fs.readFileSync('./src/sad.mp4');
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'tapa':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('em quem você quer dar um tapa?')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
wew = fs.readFileSync('./src/tapa.mp4');
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'carinho':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('em quem você quer fazer carinho?')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
cu = `fofo`
wew = fs.readFileSync('./src/carinho.mp4');
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: cu})
break
case 'tapanab':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('em quem você quer dar um tapa?')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
wew = fs.readFileSync('./src/tapab.mp4');
tekis = ` ${pushname} ?😳`
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: tekis})
break
case 'chute':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply('marque a pessoa que você quer agredir')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
wew = fs.readFileSync('./src/chute.mp4');
yhb = `Pra que agredir?` 
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: yhb})
break
//resuuult = fs.readFileSync(`./src/abraço.gif`)
//dp.sendMessage(from, resuuult, image, {quoted: mek, caption: yhb})


case 'gostosa2':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())
                      membro = []
                      const mett1 = groupMembers
                      const msdd1 = groupMembers
                      const siapsasa = mett1[Math.floor(Math.random() * mett1.length)]
                      const siapsasa2 = mett1[Math.floor(Math.random() * mett1.length)]
                      const sipssda1 = pushname[Math.floor(Math.random() * msdd1.length)]
                      cuzin = `*ＤＥＴＥＣＴＯＲ   ＤＥ  ＧＯＳＴＯＳＡＳ👩‍⚕️*\n\n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨*\n\n @${siapsasa.jid.split('@')[0]} @${siapsasa2.jid.split('@')[0]} *PARADA(O)S AÍ🖐*\n\n*VOCÊ ACABA DE RECEBER UMA MULTA POR EXCEDER O LIMITE DE GOSTOSURAKKKKKK*\n\n*VALOR DA MULTA:*\n*FOTO DA RABA NO PV kkkkk*`
                      membro.push(siapsasa.jid)
                      membro.push(siapsasa2.jid)
                      mentions(cuzin, membro, true) 
                       break
case 'ship':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('marque alguém')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
porc = `${Math.floor(Math.random() * 100)}`
yh1b =  `Vocês possuem uma chance de ${porc}% de namorarem.💘`,
wew = fs.readFileSync(`./src/ship.jpg`)
client.sendMessage(from, wew, image, {quoted: mek, caption: yh1b})
break
case 'abraço':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('em quem você quer dar um abraço?')
wew = fs.readFileSync('./src/abraço.mp4');
yhb = `fofo`
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: yhb})
break

//*********EDITOR**********//

case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater':
                case 'leavest':
                case 'logobp':
               		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                    if (args.length == 0) return reply(`Use assim: ${prefix + command} texto\nExemplo: ${prefix + command} sayo`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    client.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
         
                case 'crosslogo':                
                case 'flowertext':
                case 'silktext':                
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
               		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                    if (args.length == 0) return reply(`Use assim: ${prefix + command} texto\nExemplo: ${prefix + command} sayo`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    client.sendMessage(from, tod, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
         
         
//_COMANDOS NSFW
case 'holo':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//GIF
case 'smug':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'solo':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'ero':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'erofeet':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'spank':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feet':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'classic':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'holoero':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'cum':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eroyuri':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eron':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'pwankg':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'anal':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewd':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdkemo':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'solog':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdk':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//GIF
case 'ngif':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'blowjob':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hentai':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hololewd':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'trap':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'les':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'smallboobs':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'futanari':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'femdom':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feed':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erok':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'feetg':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erokemo':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'boobs':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'nsfwloli':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
loli.getNSFWLoli(async (err, res) => {
if (err) return reply('❌ocorreu um erro❌\n\nTente novamente. ')
buffer = await getBuffer(res.url)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Seu lolicon safado😔'})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
                  
case 'pussy':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply(ptbr.erro())
} 
}
break
                       
//GIF
case 'cumgif':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
a = webp2gifFile(buf)
mp4 = getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
              
//GIF
case 'bjgif':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
res = await fetchJson('https://nekos.life/api/v2/img/bj')
ggf = await getBuffer(res.url)
sendMediaURL(from, ggf, 'a')
break  
      
//GIF
case 'nsfwgif':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
                
//GIF
case 'slap':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
axios.get('https://nekos.life/api/v2/img/slap').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break
                
//GIF
case 'rhug':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
axios.get('https://nekos.life/api/v2/img/hug').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break

case 'tits':
   		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ind.nsfwoff())
if(args[0] === "1") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "2") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BestTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "3") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/boobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "4") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "6") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/smallboobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "7") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/TinyTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "8") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "9") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/amazingtits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
}
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
				
				default:
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`        ────────────────\nOi @${sender.split("@")[0]}!!\nO comando: ${prefix}${command} não existe\n\nTem certeza que digitou corretamente?🐤️\nUse ${prefix}Menu para listar meus comandos\n        ────────────────`)
                  }
            if (/^>/.test(pes)) {
	            let txt = pes.replace(/^>/, '')
	            let type = Function
	            if (/await/.test(pes)) type = (async () => {}).constructor
	            let func = new type('print', 'client', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
	            console.log('[EvalF]', func.toString())
	            let output
	            try {
	                output = await func((...args) => {
	                    console.log('[EvalP]', ...args)
	                    client.sendMessage(from, util.format(...args), MessageType.extendedText, {
	                        quoted: mek
	                    })
	                }, client, MessageType, mek, text, from, await image, os, fetch)
	                console.log('[EvalO]', output)
	                client.sendMessage(from, util.format(output), MessageType.extendedText, {
	                    quoted: mek
	                })
	            } catch (e) {
	                console.error('[EvalE]', e)
	                client.sendMessage(from, util.format(e), MessageType.extendedText, {
	                    quoted: mek
	                })
	            }
            }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ BOT ]','yellow'), 'COMANDO NÃO REGISTRADO DE', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
	//CABOU 😊
