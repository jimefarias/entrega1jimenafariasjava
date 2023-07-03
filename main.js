
function saludar(nombre) {
        alert("Hola, " + nombre + "! Bienvenido.");
}

let bienvenida = "Arma tu viaje en pocos pasos ¡BIENVENIDOS!";
alert(bienvenida);

let nombre = prompt("¿Cuál es tu nombre?");
saludar(nombre);

let transporte = prompt("¿queres viajar en colectivo o avion?");
if (transporte != " ") {
        alert("tu transporte  elegido es" + " " + transporte);
}
else {
        alert("¿como queres viajar?");
}

let alojamiento = prompt("¿que alojamiento buscas?");
if (alojamiento != " ") {
        alert("tu alojamiento elegido es" + " " + alojamiento);
}
else {
        alert("¿donde te queres alojar?");
}

let fecha = prompt("¿en que fecha queres viajar? indica mes y año");
if (fecha != " ") {
        alert("tu fecha elegida es" + " " + fecha);
}
else {
        alert("¿me dirias una fecha?");
}


let destinos = prompt("¿a que continente queres viajar? podes elegir entre america del norte,asia,america del sur y europa");

while (destinos !== "america del norte" && destinos !== "asia" && destinos !== "america del sur" && destinos !== "europa") {
        alert("¡Lo siento! No hay destinos disponibles. ¿Quieres probar otro destino?");
        destinos = prompt("¿A dónde te gustaría viajar?");
}

alert("Excelente elección: " + destinos);




alert(nombre + ", tu destino elegido es " + destinos + " en " + fecha + ", te alojarías en un " + alojamiento + " y viajarías en " + transporte);


class Viaje {
        constructor(destino, transporte, duracion) {
                this.destino = destinos;
                this.transporte = transporte;
                this.duracion = duracion;
        }
}


const viaje1 = new Viaje("Corea", "avion", "36 horas");
const viaje2 = new Viaje("Tokio", "avion", "96 dias");
const viaje3 = new Viaje("Japon", "avion", "40 horas");
const viaje4 = new Viaje("Francia", "avion", "25 horas");
const viaje5 = new Viaje("Mexico", "avion", "15 horas");
const viaje6 = new Viaje("Londres", "avion", "18horas");



const viajes =[viaje1, viaje2, viaje3, viaje4, viaje5, viaje6];

viajes.push ("viaje7");
console.log (viajes)

viajes.forEach(viaje => {
        console.log("Destino:", viaje.destino);
        console.log("Transporte:", viaje.transporte);
        console.log("Duración:", viaje.duracion);
        console.log("----------");
      });


