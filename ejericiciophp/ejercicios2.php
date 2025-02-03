<?php

// Problema de Lista Invertida
function invertirLista($array) {
    return array_reverse($array); // Invierte el array
}

// Problema de Suma de Números Pares
function sumaNumerosPares($array) {
    $suma = 0;
    foreach ($array as $num) {
        if ($num % 2 == 0) {
            $suma += $num; // Suma solo los números pares
        }
    }
    return $suma;
}

// Problema de Frecuencia de Caracteres
function frecuenciaCaracteres($cadena) {
    $frecuencia = [];
    $cadena = strtolower(str_replace(' ', '', $cadena)); // Convertir a minúsculas y eliminar espacios
    
    for ($i = 0; $i < strlen($cadena); $i++) {
        $caracter = $cadena[$i];
        if (isset($frecuencia[$caracter])) {
            $frecuencia[$caracter]++;
        } else {
            $frecuencia[$caracter] = 1;
        }
    }
    return $frecuencia;
}

// Problema de Bucle Anidado
function imprimirPiramide($n) {
    for ($i = 1; $i <= $n; $i++) {
        echo str_repeat(' ', $n - $i) . str_repeat('*', 2 * $i - 1) . "\n";
    }
}

// Pruebas
echo "Lista Invertida: ";
print_r(invertirLista([1, 2, 3, 4, 5]));

echo "\nSuma de Números Pares: ".sumaNumerosPares([1, 2, 3, 4, 5, 6]);

echo "\nFrecuencia de Caracteres: ";
print_r(frecuenciaCaracteres("Hola Mundo"));

echo "\nPirámide:\n";
imprimirPiramide(5);

?>
