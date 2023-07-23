//Vamos a empezar fuerte con un bucle for doble para imprimir números en la consola.


//ejercicio 1 *DESCOMENTA EL CODIGO PARA VER EL RESULTADO EN EL NAVEGADOR*
/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1

22

333

4444

55555

666666*/

/*// DECLARAMOS LAS VARIABLES    
var i, rep;
// BUCLE FOR PARA RECORRER DE 1 A 30
for (i = 1; i <= 30; i++) {
    // BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (rep = 0; rep < i; rep++) {
        // IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    // IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}
*/
//ejercicio 2
/*
Esta vez probaremos con bucles inversos

Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma :

Ej. Si se indica el número 30 el resultado sería:

303030303030303030303030303030303030303030303030303030303030

2929292929292929292929292929292929292929292929292929292929

28282828282828282828282828282828282828282828282828282828

…..

333

22

1
 */

// PEDIMOS EL NÚMERO POR TECLADO
var numrep = prompt("Introduce numero de repeticiones");
// SI LO INTRODUCIDO ES UN NÚMERO
if (Number(numrep) == numrep) {
    // SI ES UN NÚMERO ENTRE 1 Y 1000
    if (numrep > 0 && numrep <= 1000) {
        var rep, i;
        // BUCLE QUE VA DESDE numrep HASTA 1
        for (i = numrep; i >= 1; i--) {
            // BUCLE DESDE i HASTA 1
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    }
    else {
        alert("El número introducido no es válido");
    }
}
else {
    alert("No has introducido un número");
}