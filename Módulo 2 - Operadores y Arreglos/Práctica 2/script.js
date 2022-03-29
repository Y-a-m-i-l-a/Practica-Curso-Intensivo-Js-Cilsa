// Declaración de la lista de alumnos inicial
var posiciones = ["Jesús", "Laura", "Nahuel", "Mónica", "María", "Leandro", "Susana"];

// Exposición de la lista de alumnos inicial
var lista = document.getElementById("alumnos")

posiciones.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
});

// Cambios en la lista.
// 1º Mónica entrega antes que Nahuel.
var ordenEntregas = posiciones;
ordenEntregas.splice(3,1);
ordenEntregas.splice(2,0,"Mónica");

//2º Leandro no asistió y lo eliminamos de la lista.
ordenEntregas.splice(5,1);

//Detrás de Jesús y antes de Laura entregaron 2 alumnos que no estaban en la lista: Roberto y Claudia, en ese orden.
var nuevosAlumnos = ["Roberto", "Claudia"];

for (let i = 0; i < nuevosAlumnos.length; i++) {
    ordenEntregas.splice(i+1,0,nuevosAlumnos[i]);
}

//Exposición de la lista de entregas
var listaEntregas = document.getElementById("entregas")

ordenEntregas.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    listaEntregas.appendChild(li);
});