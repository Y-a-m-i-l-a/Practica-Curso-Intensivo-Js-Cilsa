window.onload = function() {
    globalThis.nombre = prompt("Bienvenido a CILSA. Le solicitamos su nombre: ");
    globalThis.apellido = prompt("Y su apellido: ");

    var info = document.getElementById("infopag");
    var enlaces = document.getElementsByTagName("a");

    info.className ="visible";
    
    var bienvenida = document.createElement("p");
    bienvenida.innerHTML = "Gracias por visitar nuestra página " + nombre;
    info.appendChild(bienvenida);

    var cantEnlaces = document.createElement("p");
    cantEnlaces.innerHTML = "Cantidad de enlaces en la página: " + enlaces.length;
    info.appendChild(cantEnlaces); 
}

//Con esta función  agregamos la persona a la lista
function agrega() {
    var alumnos = document.getElementById("alumnos");

    var alumnoNuevo = document.createElement("li");
    alumnoNuevo.innerHTML = nombre + " " + apellido;
    alumnos.appendChild(alumnoNuevo);
}

//Con esta función mostramos el contenido faltante del último párrafo
function muestra() {
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";

    var enlace = document.getElementById("btn_mostrar");
    enlace.className = "oculto";
}

//Con esta función ocultamos el contenido agregado del último párrafo
function ocultar() {
    var elemento = document.getElementById("adicional");
    elemento.className = "oculto";

    var enlace = document.getElementById("btn_mostrar");
    enlace.className = "visible";
}