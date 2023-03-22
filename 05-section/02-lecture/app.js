// KONSTANTALAR
const QOGOZ = "QOGOZ";
const QAYCHI = "QAYCHI";
const QUDUQ = "QUDUQ";

const TENGLIK = "TENGLIK";
const PLAYER_WINS = "PLAYER YUTDI";
const COMPUTER_WINS = "KOMPYUTER YUTDI";

// FUNKSIYALAR
function userInput() {
  const USER_INPUT = prompt(`Tanlang ${QOGOZ}, ${QAYCHI} yoki ${QUDUQ}?`, '').toUpperCase();
  if (USER_INPUT !== QOGOZ && USER_INPUT !== QAYCHI && USER_INPUT !== QUDUQ) {
    alert(`Xato so'z kiritdingiz!\nSiz uchun standard ${QUDUQ}'ni tanlaymiz!`);
    return QUDUQ;
  }
  return USER_INPUT;
}

function computerInput() {
  const random = Math.floor(Math.random()*10);
  if (random < 4) {
    return QAYCHI;
  } else if (random < 7) {
    return QOGOZ;
  } else {
    return QUDUQ;
  }
}

function whoWins(pChoice, cChoice) {
  if (pChoice === cChoice) {
    return TENGLIK; 
  }
  else if (
    pChoice === QOGOZ && cChoice === QUDUQ ||
    pChoice === QUDUQ && cChoice === QAYCHI || 
    pChoice === QAYCHI && cChoice === QOGOZ) 
    {
      return PLAYER_WINS
  } else {
    return COMPUTER_WINS;
  }
}

// CHAQIRISHLAR
const pChoice = userInput();
const cChoice = computerInput();
const winner = whoWins(pChoice, cChoice);
console.log(`${winner} \n\nuser: ${pChoice} \nkomyuter: ${cChoice}`);