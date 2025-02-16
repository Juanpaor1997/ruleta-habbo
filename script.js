// Ruleta de Casino - Código mejorado con números y colores reales

document.addEventListener("DOMContentLoaded", () => {
    const ruleta = document.getElementById("ruleta");
    const bola = document.getElementById("bola");
    const resultado = document.getElementById("resultado");
    const botonGirar = document.getElementById("btnGirar");

    if (!ruleta || !bola || !resultado || !botonGirar) {
        console.error("No se encontraron los elementos en el HTML.");
        return;
    }

    botonGirar.addEventListener("click", () => {
        girarRuleta();
    });
});

const ruletaNumeros = [
    { number: 0, color: "green" }, { number: 32, color: "red" }, { number: 15, color: "black" },
    { number: 19, color: "red" }, { number: 4, color: "black" }, { number: 21, color: "red" },
    { number: 2, color: "black" }, { number: 25, color: "red" }, { number: 17, color: "black" },
    { number: 34, color: "red" }, { number: 6, color: "black" }, { number: 27, color: "red" },
    { number: 13, color: "black" }, { number: 36, color: "red" }, { number: 11, color: "black" },
    { number: 30, color: "red" }, { number: 8, color: "black" }, { number: 23, color: "red" },
    { number: 10, color: "black" }, { number: 5, color: "red" }, { number: 24, color: "black" },
    { number: 16, color: "red" }, { number: 33, color: "black" }, { number: 1, color: "red" },
    { number: 20, color: "black" }, { number: 14, color: "red" }, { number: 31, color: "black" },
    { number: 9, color: "red" }, { number: 22, color: "black" }, { number: 18, color: "red" },
    { number: 29, color: "black" }, { number: 7, color: "red" }, { number: 28, color: "black" },
    { number: 12, color: "red" }, { number: 35, color: "black" }, { number: 3, color: "red" }
];

function girarRuleta() {
    let randomIndex = Math.floor(Math.random() * ruletaNumeros.length);
    let angulo = (randomIndex * (360 / ruletaNumeros.length)) + 1800;
    const ruleta = document.getElementById("ruleta");
    const bola = document.getElementById("bola");
    const resultado = document.getElementById("resultado");

    if (!ruleta || !bola || !resultado) {
        console.error("No se encontraron los elementos de la ruleta en el DOM.");
        return;
    }

    ruleta.style.transition = "transform 4s ease-out";
    ruleta.style.transform = `rotate(${angulo}deg)`;
    bola.style.transition = "transform 3.5s ease-in-out";
    bola.style.transform = `rotate(-${angulo}deg) translate(100px)`;
    
    setTimeout(() => {
        let numeroGanador = ruletaNumeros[randomIndex];
        resultado.innerText = `Número ganador: ${numeroGanador.number} (${numeroGanador.color})`;
    }, 4000);
}
