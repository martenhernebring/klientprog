let index = 0

async function fortune(api) {
  const main = document.getElementById('main')
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
      let text = document.createTextNode(json.fortune)
      next.appendChild(text)
      main.insertBefore(next, main.childNodes[0])
      if (index < 10) {
        //TODO
      }
    }
    console.log(String(index))
  } catch (error) {
    console.error(error)
  }
}

function action(evt) {
  let id = evt.target.id
  index++
  switch (id) {
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
