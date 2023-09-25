
function saludar(nombre) {
        console.log("Hola, " + nombre + "! Bienvenido.");
}


const bienvenida = "Arma tu viaje en pocos pasos ¡BIENVENIDOS!";
console.log(bienvenida);

let nombre = prompt("¿Cuál es tu nombre?");
saludar(nombre);


let transporte = prompt("¿Quieres viajar en colectivo o avión?");
if (transporte !== "") {
        console.log("Tu transporte elegido es " + transporte);
} else {
        transporte = input("¿Cómo quieres viajar?");
        console.log("Tu transporte elegido es " + transporte);
}


let alojamiento = prompt("¿Qué tipo de alojamiento buscas?");
if (alojamiento !== "") {
        console.log("Tu alojamiento elegido es " + alojamiento);
} else {
        alojamiento = input("¿Dónde te quieres alojar?");
        console.log("tu alojamiento elegido es" + alojamiento);
}


let fecha = prompt("¿En qué fecha quieres viajar? Indica mes y año");
if (fecha !== "") {
        console.log("Tu fecha elegida es " + fecha);
} else {
        fecha = input("¿Me podrías indicar una fecha?");
        console.log("tu fecha elegida es " + fecha);

}


let destinos = prompt("¿A qué continente quieres viajar? Puedes elegir entre América del Norte, Asia, América del Sur y Europa");

while (destinos !== "america del norte" && destinos !== "asia" && destinos !== "america del sur" && destinos !== "europa") {
        console.log("¡Lo siento! No hay destinos disponibles. ¿Quieres probar otro destino?");
        destinos = input("¿A dónde te gustaría viajar?");
}

console.log("Excelente elección: " + destinos);


console.log(nombre + ", tu destino elegido es " + destinos + " en " + fecha + ", te alojarías en un " + alojamiento + " y viajarías en " + transporte);

class Viaje {
        constructor(destinos, transporte, duracion) {
                this.destino = destinos;
                this.transporte = transporte;
                this.duracion = duracion;
        }
}

const viaje1 = new Viaje("Corea", "avión", "36 horas");
const viaje2 = new Viaje("Tokio", "avión", "96 días");
const viaje3 = new Viaje("Japón", "avión", "40 horas");
const viaje4 = new Viaje("Francia", "avión", "25 horas");
const viaje5 = new Viaje("México", "avión", "15 horas");
const viaje6 = new Viaje("Londres", "avión", "18 horas");

const viajes = [viaje1, viaje2, viaje3, viaje4, viaje5, viaje6];

viajes.forEach((viaje, index) => {
        console.log("Viaje #" + (index + 1));
        console.log("Destino:", viaje.destino);
        console.log("Transporte:", viaje.transporte);
        console.log("Duración:", viaje.duracion);
        console.log("----------");
});
 
const destinoBuscado = "Mexico";
const viajeEncontrado = viajes.find(viaje => viaje.destino === destinoBuscado);

if (viajeEncontrado) {
        console.log("Encontraste un viaje a " + destinoBuscado);
        console.log("Destino:", viajeEncontrado.destino);
        console.log("Transporte:", viajeEncontrado.transporte);
        console.log("Duración:", viajeEncontrado.duracion);
} else {
        console.log("No se encontró un viaje a " + destinoBuscado);
}