
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