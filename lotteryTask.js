// DATA /////////////////////////////////////

let players = [
  { name: 'Bernard', email: 'bernard@example.com' },
  { name: 'Youchi', email: 'youchi@example.com' },
  { name: 'Yenting', email: 'yenting@example.com' },
  { name: 'Angela', email: 'angela@example.com' },
  { name: 'Yvonne', email: 'yvonne@example.com' },
  { name: 'Ellen', email: 'ellen@example.com' },
  { name: 'Walter', email: 'walter@example.com' },
  { name: 'Kevin', email: 'kevin@example.com' },
  { name: 'Tim', email: 'tim@example.com' },
  { name: 'Russell', email: 'russell@example.com' }
]
const lottery = []
  

function getLottery () {
  let ticket = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i=0;i<2;i++){
  ticket += characters[Math.floor(Math.random()*26)]
  }
  ticket += Math.random().toString(10).slice(-4)
  return ticket
  // examination of copied numbers
  // one player corresponds to a unique number
  if (lottery.indexof(ticket)>=0){
    return getLottery ()
  } else {
    lottery.push(ticket) //陣列尾端加入一元素值
    return ticket
  }
}

function drawWinner (players, prize) {
  // write your code here
  const index = Math.floor(Math.random() * players.length) //每次執行時，都會隨機抽一個使用者
  const winner = players.splice(index, 1)[0] //移除winner
  
  announceMsg (winner, prize)
}

function announceMsg (winner, prize) {
  // 請新增 encodeName 和 encodeEmail 函式進行字串處理 
  console.log(`${winner.ticket} | ${encodeName(winner.name)} | ${encodeEmail(winner.email)} | ${prize}`)
}

// add more functions here

function encodeName(name) {
  //let playerName = players[index]['name']

  playerName = name.slice(0, 2) + '*'.repeat(name.length - 2)
  return playerName 
}

function encodeEmail(email) {
  //let playerEmail = players[index]['email']

  playerEmail = email.slice(0,Math.floor(email.indexOf('@')/2)) + '...'.repeat(1) + email.substring(email.indexOf('@'))
  return playerEmail
}

// EXECUTING /////////////////////////////////////

// each player gets a lottery ticket
// write your code here


for (let i =0; i < players.length; i++){
  players[i].ticket = getLottery()
}

// draw 3 winners and announce the results
drawWinner(players, '頭獎')
drawWinner(players, '貮獎')
drawWinner(players, '叁獎')

// the rest of players get participation award
// write your code here
for (let i = 0; i < players.length; i++){
  announceMsg(players[i], '參加獎')
}