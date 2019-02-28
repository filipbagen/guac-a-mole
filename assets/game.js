const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const avocados = document.querySelectorAll('.avocado')
let lastHole
let timeUp = false
let score = 0

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const randomHole = (holes) => {
  const idx = Math.floor(Math.random() * holes.length)
  const hole = holes[idx]
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud')
    return randomHole(holes)
  }
  lastHole = hole
  return hole
}

const pop = () => {
  const time = randomTime(200, 1000)
  const hole = randomHole(holes)
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up')
    if (!timeUp) pop()
  }, time)
}

const startGame = () => {
  scoreBoard.textContent = 0
  timeUp = false
  score = 0
  pop()
  setTimeout(() => timeUp = true, 10000)
}

function bonk (e) {
  if (!e.isTrusted) return // cheater!
  score++
  this.parentNode.classList.remove('up')
  scoreBoard.textContent = score
}

avocados.forEach(avocado => avocado.addEventListener('click', bonk))

// const loadGame = () => {
//   const game = document.querySelector('.playGame')
//   game.style.visibility = 'hidden'
// }

// const playGameNow = () => {
//   const game = document.querySelector('.playGame')
//   game.style.visibility = 'visible'
// }