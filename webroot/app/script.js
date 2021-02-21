let index = 0
let main = document.getElementById('main')

async function fortune(choice) {
  try {
    let resp
    switch (choice) {
      case 'short':
        index++
        resp = await fetch('/api/short')
        break
      case 'shower':
        index++
        resp = await fetch('/api/showerthought')
        break
      case 'tradition':
        index++
        resp = await fetch('/api/traditional')
        break
      case 'random':
        index++
      default:
        resp = await fetch('/api/fortune')
    }
    if (!resp.ok) {
      throw new Error(response.status)
    }
    let json = await resp.json()
    if (index === 0) {
      let first = document.getElementById('hidden')
      first.innerText = json.fortune
      first.style.visibility = 'visible'
    } else {
      let pre = document.createElement('pre')
      pre.className = 'fortune'
      let fortuneText = document.createTextNode(json.fortune)
      pre.appendChild(fortuneText) 
      main.appendChild(pre)
    }
    console.log(String(index))
  } catch (error) {
    console.error(error)
  }
}

function action(evt) {
  fortune(evt.target.id)
}

function setup() {
  const buttons = document.getElementsByTagName('button')
  for (const button of buttons) {
    button.addEventListener('click', action)
  }
  fortune()
}

window.addEventListener('load', setup)
