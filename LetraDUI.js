/*
    Realizar una página con un script que calcule el valor de la letra de un número de DUI (Documento Unico de indentidad).

    El algoritmo para calcular la letra del dui es el siguiente :

    *El número debe ser entre 0 y 99999999
    *Debemos calcular el resto de la división entera entre el número y el número 23.
    *Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
    *Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
    *Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/


// DECLARAMOS LAS VARIABLES QUE VAMOS A USAR
var resto = 0;
var letra = "";
do {
    var numero = prompt("Introduce tu DUI");
    if (Number(numero) == numero) {
        numero = Number(numero);
        if (numero >= 0 && numero <= 99999999) {
            // CALCULAMOS EL RESTO DE DIVIDIR EL NÚMERO ENTRE 23
            resto = numero % 23;
            // SEGÚN SEA EL RESTO ASIGNAMOS UN VALOR A LA VARIABLE LETRA
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    // SI NO ES UN NÚMERO ENTRE 0 Y 22 MOSTRAMOS UN ERROR
                    alert("Numero erroneo");
            }
        }
        // MOSTRAMOS MENSAJE CON EL DNI Y LA LETRA OBTENIDA
        alert("Numero: " + numero + ", Letra: " + letra);
    }
    // SI NO ES UN NÚMERO
    else {
        // SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
}
// MIENTRAS NO SE PULSE CANCELAR VUELVE ARRIBA
while (numero != undefined);
