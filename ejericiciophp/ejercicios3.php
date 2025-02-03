<?php

// Problema de Ordenar Lista con Bubble Sort
function bubbleSortDescendente($array) {
    $n = count($array);
    for ($i = 0; $i < $n - 1; $i++) {
        for ($j = 0; $j < $n - $i - 1; $j++) {
            if ($array[$j] < $array[$j + 1]) {
                $temp = $array[$j];
                $array[$j] = $array[$j + 1];
                $array[$j + 1] = $temp;
            }
        }
    }
    return $array;
}

// Problema de Ordenar Lista con Merge Sort
function mergeSort($array) {
    if (count($array) <= 1) {
        return $array;
    }
    $medio = floor(count($array) / 2);
    $izquierda = mergeSort(array_slice($array, 0, $medio));
    $derecha = mergeSort(array_slice($array, $medio));
    return merge($izquierda, $derecha);
}

function merge($izquierda, $derecha) {
    $resultado = [];
    while (count($izquierda) > 0 && count($derecha) > 0) {
        if ($izquierda[0] < $derecha[0]) {
            $resultado[] = array_shift($izquierda);
        } else {
            $resultado[] = array_shift($derecha);
        }
    }
    return array_merge($resultado, $izquierda, $derecha);
}

// Problema de Ordenar Lista con Insertion Sort
function insertionSort($array) {
    $n = count($array);
    for ($i = 1; $i < $n; $i++) {
        $key = $array[$i];
        $j = $i - 1;
        while ($j >= 0 && $array[$j] > $key) {
            $array[$j + 1] = $array[$j];
            $j--;
        }
        $array[$j + 1] = $key;
    }
    return $array;
}

// Pruebas
echo "Lista antes y después de Bubble Sort (Descendente): ";
$lista = [3, -1, 4, 1, 5, 9, 2, 6];
print_r($lista);
print_r(bubbleSortDescendente($lista));

echo "\nLista antes y después de Merge Sort (Alfabético): ";
$palabras = ["manzana", "pera", "uva", "banana", "kiwi"];
print_r($palabras);
print_r(mergeSort($palabras));

echo "\nLista antes y después de Insertion Sort (Alfabético): ";
$nombres = ["Carlos", "Ana", "Pedro", "Luis", "Beatriz"];
print_r($nombres);
print_r(insertionSort($nombres));

?>