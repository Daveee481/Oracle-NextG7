/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */

let diaSemana = prompt("¿Qué día de la semana es?");

if(diaSemana == "sabado" && diaSemana == "domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}