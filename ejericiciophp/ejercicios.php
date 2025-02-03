<?php

// Problema de la serie Fibonacci
function generarFibonacci($n) {
    $serie = [0, 1]; // Inicializamos la serie con los dos primeros términos
    for ($i = 2; $i < $n; $i++) {
        $serie[] = $serie[$i - 1] + $serie[$i - 2]; // Suma de los dos términos anteriores
    }
    return array_slice($serie, 0, $n); // Retorna solo los primeros n términos
}

// Problema de números Primos
function esPrimo($num) {
    if ($num < 2) return false; // 0 y 1 no son primos
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) return false; // Si es divisible por otro número, no es primo
    }
    return true;
}

// Problema de Palíndromos
function esPalindromo($cadena) {
    $cadena = strtolower(preg_replace('/[^a-z0-9]/', '', $cadena)); // Limpiar la cadena y convertir a minúsculas
    return $cadena === strrev($cadena); // Comparar la cadena original con su inversa
}

// Pruebas
echo "Serie Fibonacci (n=10): ";
print_r(generarFibonacci(10));

echo "\n¿El número 7 es primo?: ".(esPrimo(7) ? "Sí" : "No");

echo "\n¿La palabra 'Anilina' es palíndromo?: ".(esPalindromo("Anilina") ? "Sí" : "No");

?>