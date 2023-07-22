/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

// DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
/*var resultado = ""
// BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    // PEDIMOS LA CADENA POR TECLADO
    var cadena = prompt("Introduce una cadena");
    // SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        // CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + cadena;
    }
    // SINÓ
    else {
        // CONCATENAMOS CON GUIÓN
        resultado = resultado + "-" + cadena;
    }
// MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));
// SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO 
document.write(resultado); */


/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse
 con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números 
 introducidos. */

// DECLARAMOS LA VARIABLE SUMA
var suma = 0;
// BUCLE DO WHILE PARA INTRODUCIR VARIOS
do {
    // PEDIMOS EL NÚMERO POR TECLADO
    var numero = prompt("Introduce un numero");
    // COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
    if (Number(numero) == numero) {
        // CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
        numero = Number(numero);
        // SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
        suma = suma + numero;
    }
    // SI LO INTRODUCIDO NO ES UN NÚMERO
    else {
        // SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
// VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
} while (numero != undefined);
// SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
document.write(suma);