// EJERCICIO 1
function verificarEdad() {
    let edad = parseInt(prompt("Ingrese su edad:"), 10);
    return isNaN(edad) ? "Entrada no válida" : (edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");
}

// EJERCICIO 2
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    return `Nombre: ${nombre}, Carnet: ${carnet}, Nota Final: ${notaFinal.toFixed(2)}`;
}

// EJERCICIO 3
function calcularAumento(nombre, salario, categoria) {
    let aumentoPorcentaje = { 'A': 0.15, 'B': 0.30, 'C': 0.10, 'D': 0.20 };
    let aumento = salario * (aumentoPorcentaje[categoria] || 0);
    return `Empleado: ${nombre}, Salario: ${salario}, Categoría: ${categoria}, Aumento: ${aumento.toFixed(2)}, Nuevo Salario: ${(salario + aumento).toFixed(2)}`;
}

// EJERCICIO 4
function numeroMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// EJERCICIO 5
function calcularDescuentoCoche(coche) {
    let descuentos = { 'FORD FIESTA': 0.05, 'FORD FOCUS': 0.10, 'FORD ESCAPE': 0.20 };
    let descuento = descuentos[coche.toUpperCase()] || 0;
    return `Coche seleccionado: ${coche}, Descuento aplicado: ${(descuento * 100)}%`;
}

// EJERCICIO 6
function calcularDescuentoViaje(origen, destino) {
    let descuentos = { 'La costa del Sol': 0.05, 'Panchimalco': 0.10, 'Puerto el Triunfo': 0.15 };
    let descuento = descuentos[destino] || 0;
    return `Origen: ${origen}, Destino: ${destino}, Descuento: ${(descuento * 100)}%`;
}

// EJERCICIO 7
function analizarNumeros(numeros) {
    let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;
    
    numeros.forEach(num => {
        if (num < 0) negativos++;
        if (num > 0) positivos++;
        if (num % 15 === 0) multiplos15++;
        if (num % 2 === 0) sumaPares += num;
    });
    
    return { negativos, positivos, multiplos15, sumaPares };
}

// EJERCICIO 8
function tablaMultiplicar(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}

// EJERCICIO 9
function convertirTemperatura(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    let mensaje = fahrenheit < 14 ? "Temperatura desconocida" :
                  fahrenheit <= 32 ? "Temperatura baja" :
                  fahrenheit <= 68 ? "Temperatura adecuada" :
                  fahrenheit <= 96 ? "Temperatura alta" : "Temperatura desconocida";
    return `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}, ${mensaje}`;
}

// EJERCICIO 10
function calcularPromedioEdades(manana, tarde, noche) {
    let promedioManana = manana.reduce((a, b) => a + b, 0) / manana.length;
    let promedioTarde = tarde.reduce((a, b) => a + b, 0) / tarde.length;
    let promedioNoche = noche.reduce((a, b) => a + b, 0) / noche.length;
    
    let mayor = Math.max(promedioManana, promedioTarde, promedioNoche);
    let turnoMayor = mayor === promedioManana ? "Mañana" : mayor === promedioTarde ? "Tarde" : "Noche";
    
    return `Promedio Mañana: ${promedioManana.toFixed(2)}, Promedio Tarde: ${promedioTarde.toFixed(2)}, Promedio Noche: ${promedioNoche.toFixed(2)}. Turno con mayor promedio: ${turnoMayor}`;
}
