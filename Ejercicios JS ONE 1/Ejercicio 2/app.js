/*Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.*/


    let numero = prompt("Ingrese un número");
    if (numero > 0) {
        alert("El número ingresado es positivo");
    }else{
        if (numero < 0) {
            alert("El número ingresado es negativo");
    }else{
        alert("El número ingresado es cero");
    }
    }

