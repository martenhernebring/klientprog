async function randomFortune() {
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

function action(evt){
  if(evt.target.id === "random"){
    randomFortune()
  }
}

function setup() {
  const buttons = document.getElementsByTagName('button')
  for (const button of buttons) {
    button.addEventListener('click', action)
  }
  randomFortune()
}

window.addEventListener('load', setup)
