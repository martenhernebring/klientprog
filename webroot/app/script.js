async function updateFortune(evt) {
  try {
    let resp = await fetch('/api/fortune')
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

function setup() {
  let button = document.getElementById('random')
  button.addEventListener('click', updateFortune)
  updateFortune()
}

window.addEventListener('load', setup)
