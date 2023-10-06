
var valor, 
descuentoa=0.1, 
descuentob =0.02, 
montoDescuento, 
descuento,
opcion

do {
    opcion=parseInt(prompt(" 1.realizar proceso 2.salir"))
    switch (opcion) {
        case 1:
            valor=parseInt(prompt("ingrese el monto, si es menor a 100 da un descuento del  2% y mayor o igual da un 10%"));
            switch (true) {
            case (monto>=100):
            montoDescuento=valor-(monto*descuento1)
            descuento=valor*descuentoa
            alert("se realiza un descuento del 10% equivalente a " +descuento+ " , el valor con descuento es de "+ montoDescuento);
        break;
        default:
            montoDescuento=valor-(valor*descuentob)
            descuento=monto*descuentob
            alert("se realiza un descuento del 2% equivalente a " +descuento+ " , el valor con descuento es de "+ montoDescuento);
        break;
        }
    break;
    }
} while (opcion !=2);