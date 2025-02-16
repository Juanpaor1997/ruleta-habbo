function girarRuleta() {
    let angulo = Math.floor(Math.random() * 360) + 1800; // Gira varias vueltas y cae en un número aleatorio
    document.getElementById("ruleta").style.transform = `rotate(${angulo}deg)`;
    
    setTimeout(() => {
        let numeroGanador = Math.floor(Math.random() * 37); // Simula un número de la ruleta
        document.getElementById("resultado").innerText = `Número ganador: ${numeroGanador}`;
    }, 4000);
}