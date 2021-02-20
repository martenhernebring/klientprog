async function fortune(choice) {
  try {
    let resp
    switch (choice) {
      case 'short':
        resp = await fetch('/api/short')
        break
      case 'shower':
        resp = await fetch('/api/showerthought')
        break
      case 'tradition':
        resp = await fetch('/api/traditional')
        break
      default:
        resp = await fetch('/api/fortune')
    }
    if (!resp.ok) {
      throw new Error(response.status)
    }
    let json = await resp.json()
    let fortune = document.getElementById('fortune')
    fortune.innerText = json.fortune
    fortune.style.visibility = 'visible'
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
