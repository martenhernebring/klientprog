let index = 0

async function fortune(api) {
  try {
    let resp = await fetch(api)
    if (!resp.ok) {
      throw new Error(response.status)
    }
    let json = await resp.json()
    if (index === 0) {
      let first = document.getElementById('hidden')
      first.innerText = json.fortune
      first.style.visibility = 'visible'
    } else {
      let next = document.createElement('pre')
      next.className = 'fortune'
      next.appendChild(document.createTextNode(json.fortune))
      const main = document.getElementById('main')
      let nodes = main.childNodes
      if (index > 9) {
        main.removeChild(main.lastElementChild);
      }
      main.insertBefore(next, nodes[0])
    }
  } catch (error) {
    console.error(error)
  }
}

function action(evt) { 
  index++
  switch (evt.target.id) {
    case 'short':
      fortune('/api/short')
      break
    case 'shower':
      fortune('/api/showerthought')
      break
    case 'tradition':
      fortune('/api/traditional')
      break
    default:
      fortune('/api/fortune')
  }
}

window.addEventListener('load', () => {
  const buttons = document.getElementsByTagName('button')
  for (const button of buttons) {
    button.addEventListener('click', action)
  }
  fortune('/api/fortune')
})
