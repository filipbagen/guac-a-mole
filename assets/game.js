function dropText () {
  const elem = document.querySelector('.drop')
  let pos = -160
  const id = setInterval(frame, 0.1)
  function frame () {
    if (pos === 0) {
      clearInterval(id)
    } else {
      pos++
      elem.style.top = pos + 'px'
    }
  }
}

function dropSign () {
  const elem = document.querySelector('#sign')
  let pos = -300
  const id = setInterval(frame, 0.1)
  function frame () {
    if (pos === 0) {
      clearInterval(id)
    } else {
      pos++
      elem.style.top = pos + 'px'
    }
  }
}
