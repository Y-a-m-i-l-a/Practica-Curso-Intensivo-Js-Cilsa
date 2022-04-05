// 1) Radio buttons
var opcionElegida = "Usted no seleccionó ninguna opción.";

function opcion(opcionID) {
    if (opcionID == 1) {
        opcionElegida = "Usted seleccionó la opción 1.";
    } else if (opcionID == 2) {
        opcionElegida = "Usted seleccionó la opción 2.";
    }
    return opcionElegida;
}

function mostrarEleccion() {
    alert(opcionElegida);
}

// 2) Número mayor
function mayor() {
    let num1 = document.forms["numMayor"]["num1"].value;
    let num2 = document.forms["numMayor"]["num2"].value;
    if (num1 == "" || num2 == "") {
        alert("Por favor ingrese ambos números.");
    } else if (num1 > num2) {
        alert("El número " + num1 + " es el mayor.");
    } else if (num1 < num2) {
        alert("El número " + num2 + " es el mayor.");
    } else if (num1 == num2) {
        alert("Ambos números son iguales.");
    }
}

// 3) Suma
function suma() {
    let sum1 = document.forms["sumar"]["sum1"].value;
    let sum2 = document.forms["sumar"]["sum2"].value;
    if (sum1 == "" || sum2 == "") {
        alert("Por favor ingrese ambos números.");
    } else {
        sum1 = Number(sum1);
        sum2 = Number(sum2);
        let suma = sum1 + sum2;
        alert("La suma es: " + suma);
    }
}
