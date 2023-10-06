var  asistencias, cantidadClases=10, minasistencia=80, calificacion, porcentajeAsistencias, opcion


do {
     opcion=parseInt(prompt("elija el menu: 1. proceso 2.salir"))
switch (opcion) {
case 1:
asistencias=parseInt(prompt("maximo de clases = 10,en cuantas asistio el alumno"));
 calificacion=parseFloat(prompt("dado la nota maxima 5.0, ingrese la nota del alumno"));
 porcentajeAsistencias= (asistencias/cantidadClases)*100
switch (true) {
case (porcentajeAsistencias>=minasistencia && calificacion>=3.0):
alert("el alumno aprueba con " +calificacion + " de nota, y un "+porcentajeAsistencias +" % de asistencia");
break;
default:
alert("el alumno no aprueba dado que obtubo una calificacion de " +calificacion + " y un "+porcentajeAsistencias +"% de asistencia");
break;
 }
 break;
    }
} while (opcion !=2);