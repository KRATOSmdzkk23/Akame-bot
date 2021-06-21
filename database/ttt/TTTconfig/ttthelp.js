const ttthelp = (prefix) => {
    return `
「 \u{1F4AE} Tic Tac Toe \u{1F4AE} 」

◪ BETA, EVITE USAR

◪ APENAS PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${prefix}ttt [ DIFICULDADE ] 」
  └─ ❏ Apenas uma pessoa por vez

◪ DIFICULDADE
  │
  ├─ ❏ easy : totalmente aleatório
  │     (Só azarado pra perder nessa)
  ├─ ❏ normal : 66% de chance 
  │     de bloqueio e vitória
  ├─ ❏ hard : 100% de chance 
  │     de bloqueio e vitória 
  └─ ❏ impossible : Só Kuuhaku
           pra vencer isso

◪ TEMPORIZADOR
  │
  ├─ ❏ Uma nova partida só poderá
  │     ser iniciada após um intervalo
  │     de 4 minutos apartir do início
  │     da partida anterior
  │
  └─ ❏ A partida terminará 
           automaticamente após 4 minutos

◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${prefix}coord [ COORDENADA ] 」
  │
  └─ ❏ Exemplo:
	        └「   ${prefix}coord a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲  」

◪ SEU STATUS
  │
  └─ ❏ Para ver seu status digite:
          └「 ${prefix}tttme 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ Vitória : +「 2005 / 5000 」
  │     └ Derrota : -「 200 / 200 」
  │
  ├─ ❏ NORMAL
  │     ├ Vitória : +「 7005 / 15000 」
  │     └ Derrota : -「 705 / 1050 」
  │
  ├─ ❏ HARD
  │     ├ Vitória : +「 20000 / 40000 」
  │     └ Derrota : -「 2005 / 5000 」
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ Vitória : +「 100000 / 200000 」
  │     └ Derrota : -「 0 / 0 」
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NÃO FINALIZADA
          └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp