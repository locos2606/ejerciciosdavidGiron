var NumeroUNO, NumeroDOS, operacions, opcion

do {
    opcion=parseInt(prompt("elija: 1.hacer proceso 2.salir"))
    switch (opcion) {
        case 1:
            NumeroUNO=parseFloat(prompt("ingrese el primer numero"));
            NumeroDOS=parseFloat(prompt("ingrese el segundo numero"));
            switch (true) {
                case (primerNumero>segundoNumero):
                    operacion=primerNumero+segundoNumero
                    alert("al ser el primer numero de mayor valor, se les aplico la oprecion suma, su resultado es  "+operacion);
                break;
                case (primerNumero==segundoNumero):
                    operacions=primerNumero+segundoNumero
                    alert("NUMEOR IGUALES");
                break;
            default:
                operacions=(NumeroUNO*NumeroUNO)+(NumeroDOS*NumeroDOS)
                alert("al ser el segundo numero de mayor valor, se elevo al cuadrado ambos numeros y se sumaron, su resultado es  "+operacions);
            break;
            }
        break;
    break;
    }
} while (opcion !=2);