const formulario = document.getElementById("formulario");
const validado = document.getElementById("validado");
var valorIngresado = document.getElementById("num");

const checked = document.getElementById("checked");
const noChecked = document.getElementById("noChecked");

var mensajeError = document.getElementById("mensajeError");

var validarInput = valorIngresado.addEventListener("keyup", checkPoint)

function checkPoint() {
    if (valorIngresado.value == "") {
        mensajeError.style.visibility = "visible";
        checked.style.display = "none";
        noChecked.style.display = "initial";
    } else if (parseInt(valorIngresado.value) && (parseInt(valorIngresado.value) >= 1) && (parseInt(valorIngresado.value) <= 100)) {
        mensajeError.style.visibility = "hidden";
        checked.style.display = "initial";
        noChecked.style.display = "none";
    } else {
        mensajeError.style.visibility = "visible";
        checked.style.display = "none";
        noChecked.style.display = "initial";
    }
}

function validar() {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault()

        if (valorIngresado.value == "" || !parseInt(valorIngresado.value) || (parseInt(valorIngresado.value) < 1) || (parseInt(valorIngresado.value) > 100)) {
            mensajeError.style.visibility = "visible";
            checked.style.display = "none";
            noChecked.style.display = "initial";
        } else {
            event.currentTarget.submit();
            // formulario.style.display = "none";
            // validado.style.display = "block";
        }
        
    })
}