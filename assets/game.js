const loadGame = () => {
  dropText()
  dropSign()
}

const dropText = () => {
  const elem = document.querySelector('.drop')
  let pos = -160
  const id = setInterval(frame, 1)
  function frame () {
    if (pos === 0) {
      clearInterval(id)
    } else {
      pos++
      elem.style.top = pos + 'px'
    }
  }
}

const dropSign = () => {
  const elem = document.querySelector('#sign')
  let pos = -300
  const id = setInterval(frame, 1)
  function frame () {
    if (pos === 40) {
      clearInterval(id)
    } else {
      pos++
      elem.style.top = pos + 'px'
    }
  }
}

// const startGame = () => {
//   const welcome = document.querySelector('.welcome')
//   welcome.remove()
//   const revealGame = document.querySelector('.game')
//   revealGame.style.visibility = 'visible'
// }

// const hideGame = () => {
//   const game = document.querySelector('.game')
//   game.remove()
// }