window.addEventListener('load', () => {
    async function updateFortune() {
        let resp = await fetch('/api/fortune')
        let json = await resp.json()
        let fortune = document.getElementById('fortune')
        fortune.innerText = json.fortune
        fortune.style.visibility = 'visible';
    }
    
    let button = document.getElementById('mf');
    button.addEventListener('click', updateFortune)
    updateFortune()
})