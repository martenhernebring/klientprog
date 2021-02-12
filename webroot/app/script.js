window.addEventListener('load', () => {
    async function updateFortune() {
        let resp = await fetch('/api/fortune')
        let json = await resp.json()
        let fortune = document.getElementById('fortune')
        fortune.innerText = json.fortune
        fortune.style.display = "block"
    }
    
    let button = document.getElementById('menu');
    button.onclick = updateFortune;
    updateFortune()
})