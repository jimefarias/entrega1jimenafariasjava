
function saludar(nombre) {
        alert("Hola, " + nombre + "! Bienvenido.");
}


const bienvenida = "Arma tu viaje en pocos pasos ¡BIENVENIDOS!";
console.log(bienvenida);

let nombre = prompt("¿Cuál es tu nombre?");
saludar(nombre);
   

let transporte = prompt("¿Quieres viajar en colectivo o avión?");
if (transporte !== "") {
        alert("Tu transporte elegido es " + transporte);
} else {
        transporte = input("¿Cómo quieres viajar?");
        alert("Tu transporte elegido es " + transporte);
}


let alojamiento = prompt("¿Qué tipo de alojamiento buscas?");
if (alojamiento !== "") {
        alert("Tu alojamiento elegido es " + alojamiento);
} else {
        alojamiento = input("¿Dónde te quieres alojar?");
        alert("Tu alojamiento elegido es " + alojamiento);
}


let fecha = prompt("¿En qué fecha quieres viajar? Indica mes y año");
if (fecha !== "") {
        alert("Tu fecha elegida es " + fecha);
} else {
        fecha = input("¿Me podrías indicar una fecha?");
        alert("Tu fecha elegida es " + fecha);
}


let destinos = prompt("¿A qué continente quieres viajar? Puedes elegir entre América del Norte, Asia, América del Sur y Europa");

while (destinos !== "america del norte" && destinos !== "asia" && destinos !== "america del sur" && destinos !== "europa") {
        console.log("¡Lo siento! No hay destinos disponibles. ¿Quieres probar otro destino?");
        destinos = input("¿A dónde te gustaría viajar?");
}

alert("Excelente elección: " + destinos);


alert(nombre + ", tu destino elegido es " + destinos + " en " + fecha + ", te alojarías en un " + alojamiento + " y viajarías en " + transporte);


