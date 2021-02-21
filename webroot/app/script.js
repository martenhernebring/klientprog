let index = 0

async function fortune(api) {
  try {
    let resp = await fetch(api)
    if (!resp.ok) {
      throw new Error(response.status)
    }
    let json = await resp.json()
    if (index === 0) {
      let first = document.getElementById('first')
      first.innerText = json.fortune
      first.style.visibility = 'visible'
      index++
    } else if (!Array.isArray(json)) {
      let next = document.createElement('pre')
      next.className = 'fortune'
      next.appendChild(document.createTextNode(json.fortune))
      const main = document.getElementById('main')
      if (index > 9) {
        main.removeChild(main.lastElementChild)
      }
      main.insertBefore(next, main.childNodes[0])
      index++
    } else {
      for (const single of json) {
        let next = document.createElement('pre')
        next.className = 'fortune'
        next.appendChild(document.createTextNode(single.fortune))
        const main = document.getElementById('main')
        if (index > 9) {
          main.removeChild(main.lastElementChild)
        }
        main.insertBefore(next, main.childNodes[0])
        index++
      }
    }
  } catch (error) {
    console.error(error)
  }
}

function action(evt) {
  switch (evt.target.id) {
    case 'query':
      if (evt.key === 'Enter') {
        fortune('api/query?q=' + evt.target.value)
      }
      break
    case 'short':
      fortune('api/short')
      break
    case 'shower':
      fortune('api/showerthought')
      break
    case 'tradition':
      fortune('api/traditional')
      break
    default:
      fortune('api/fortune')
  }
}

window.addEventListener('load', () => {
  const buttons = document.getElementsByTagName('button')
  for (const button of buttons) {
    button.addEventListener('click', action)
  }
  const search = document.getElementById('query')
  search.addEventListener('keypress', action)
  fortune('api/fortune')
})
