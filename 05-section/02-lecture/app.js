// KONSTANTALAR
const QOGOZ = "QOGOZ";
const QAYCHI = "QAYCHI";
const QUDUQ = "QUDUQ";

const TENGLIK = "TENGLIK";
const PLAYER_WINS = "PLAYER YUTDI";
const COMPUTER_WINS = "KOMPYUTER YUTDI";

// FUNKSIYALAR
function userInput() {
  const INPUT = prompt(`Tanlang ${QOGOZ}, ${QAYCHI} yoki ${QUDUQ}`,"").toUpperCase();
  if (INPUT !== QOGOZ && INPUT !== QAYCHI && INPUT !== QUDUQ) {
    alert(`Siz noto'g'ri so'z kiritdingiz!\nSiz uchun ${QUDUQ}'ni tanlab qo'yaman.`);
    return QUDUQ;
  }
  return INPUT;
}

function computerInput() {
  const RANDOM = Math.floor(Math.random() * 10);
  if (RANDOM < 4) {
    return QOGOZ;
  } else if (RANDOM < 7) {
    return QAYCHI;
  } else {
    return QUDUQ;
  }
}

function whoWins(playChoice, compChoice) {
  if (playChoice === compChoice) {
    return TENGLIK;
  } else if (
    (playChoice === QOGOZ && compChoice === QUDUQ) ||
    (playChoice === QAYCHI && compChoice === QOGOZ) ||
    (playChoice === QUDUQ && compChoice === QAYCHI)
  ) {
    return PLAYER_WINS;
  } else {
    return COMPUTER_WINS;
  }
}


const pChoice = userInput();
const cChoice = computerInput();
const winner = whoWins(pChoice, cChoice);

console.log(`${winner}\n\nplayer: ${pChoice}\ncomputer: ${cChoice}`);