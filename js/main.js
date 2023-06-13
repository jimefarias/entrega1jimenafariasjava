let bienvenida = ("Arma tu viaje en pocos pasos ¡BIENVENIDOS!");

let nombre = prompt("¿cual es tu nombre?");
if (nombre != "") {
        alert("hola" + " " + nombre);
}
else {
        alert("¿me dirias tu nombre?")
}

let transporte = prompt("¿queres viajar en colectivo o avion?");
if (transporte != " ") {
        alert("tu transporte  elegido es" + " " + transporte);
}
else {
        alert("¿como queres viajar?");
}

let alojamiento = prompt("¿que alojamiento buscas?");
if (transporte != " ") {
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


let destinos = prompt("¿a que continente queres viajar?");
while (destinos != "1") {
        switch (destinos) {
                case "america del norte":
                        alert("excelente eleccion");
                        break;
                case "asia":
                        alert("excelente eleccion");
                        break;
                case "america del sur":
                        alert("excelente eleccion");
                        break;
                case "europa":
                        alert("excelente eleccion");
                        break;
                default:
                        alert("¡lo siento! no hay destinos disponibles ¿queres probar otro destino?");
                        break;
        } 
        destinos = prompt("¿a donde te gustaria viajar?"); 
}

alert (nombre + ",tu destino elegido es" + destinos + "en" + fecha + ",te alojarias en un" + alojamiento + " y viajarias en" + transporte)

