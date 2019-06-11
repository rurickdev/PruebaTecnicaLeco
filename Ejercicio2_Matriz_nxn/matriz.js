const matrix = [
    [1, 2, 3],
    [-1, -2, -3],
    [-4, 5, -9]
]

function getDiagonalDifferences(matrix) {

    let matrizSize = matrix.length
    let descendantDiagonal = 0
    let ascendingDiagonal = 0

    //* Sumar valores de las diagonales
    for (i = 0; i < matrizSize; i++) {
        for (j = 0; j < matrizSize; j++) {
            //* En la diagonal descendente los elementos tienen el mismo valor
            //* en su coordenada [i] y la coordenada [j]
            if (j === i) {
                descendantDiagonal += matrix[i][j]
            }
            //* En la diagonal ascendente los elementos tienen coordenadas que 
            //* cumplen que la suma del valor [i] mas [j] es igual al tamaño de
            //* la matriz menos 1, esta resta se debe a que los arreglos inician en cero
            if ((i + j) === (matrizSize - 1)) {
                ascendingDiagonal += matrix[i][j]
            }
        }
    }

    //* Retorna el valor absoluto de la resta de las diagonales
    //* así puede ser usada la funcion en cualquier lado
    return Math.abs(ascendingDiagonal - descendantDiagonal)
}

//* Imprime la matriz
for (i = 0; i < 3; i++) {
    console.log(matrix[i])
}

//* Mostramos el valor que retorna la funcion [getDiagonalDifferences()]
console.log(getDiagonalDifferences(matrix))