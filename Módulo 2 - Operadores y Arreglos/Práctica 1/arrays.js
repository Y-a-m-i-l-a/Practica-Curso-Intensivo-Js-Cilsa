// var nombre = prompt('¿Cuál es tu nombre?');
// var apellido = prompt('¿Cuál es tu apellido?');
// var edad = prompt('¿Cuál es tu edad?');
// var ciudad = prompt('¿En qué ciudad vives?');

var datos = ["Nombre", "Apellido", "Edad", "Ciudad"];
var datosPersonales = [];

for (let i = 0; i < datos.length; i++) {
    let dato = prompt(datos[i] + ":");
    datosPersonales.push(dato);
};

for (let i = 0; i < datosPersonales.length; i++) {
    document.getElementById(datos[i]).innerHTML = datosPersonales[i];
}
