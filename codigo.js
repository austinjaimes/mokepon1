function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if (jugada == 1){
    resultado = "Piedra 🥌"
    } else if (jugada == 2){
        resultado = "Papel 📰"
    } else if (jugada == 3){
        resultado = "Tijera ✂"
    } else{
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

let jugador = 0
let pc = 0
let victorias = 0
let derrotas = 0

while (victorias < 3 && derrotas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige una de las 3 opciones: 1-piedra, 2-papel, 3-tijera")
    
    alert("PC elige: " + eleccion(pc))
    alert("Haz elegido: " + eleccion(jugador))

    // combate
    if (jugador == pc){
        alert("EMPATE")
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("GANASTE")
        victorias = victorias + 1
    } else{
        alert("PERDISTE")
        derrotas = derrotas + 1
    }
    } alert ("Obtuviste " + victorias + " victorias." + " Obtuviste " + derrotas + " derrotas")

    if (derrotas == 3){
        alert("PERDISTE, SIGUELO INTENTANDO")
    } 
    if (victorias == 3){
        alert("GANASTE, FELICIDADES")
    } 