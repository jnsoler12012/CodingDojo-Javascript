/**
 * Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
 */

function counterTo255() {
    let arrayNumbers = []
    for (let x = 1; x <= 255; x++) {
        arrayNumbers.push(x)
    }
    return arrayNumbers
}

/**
 * Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 -
 * Puedes usar un operador de módulo para este ejercicio. 
 */

function pairSum() {
    let sumNums = 0
    for (let x = 1; x <= 1000; x++) {
        if (x % 2 == 0)
            sumNums += x
    }
    return sumNums
}

/**
 * Suma impares hasta 5000: 
 * Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
 */

function oddSum() {
    let sumNums = 0
    for (let x = 1; x <= 5000; x++) {
        if (x % 2 !== 0)
            sumNums += x
    }
    return sumNums
}

/**
 * Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array
 * (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
 */

function sumElementsArray(array) {
    let sumNums = 0
    for (let x = 0; x <= array.length - 1; x++) {
        sumNums += array[x]
    }
    return sumNums
}

/**
 * Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor
 * (ej: para [-3,3,5,7] el número mayor (max) es 7). 
 */

function maxValueFromArray(array) {
    let max = 0
    for (let x = 0; x <= array.length - 1; x++) {
        if (array[x] > max)
            max = array[x]
    }
    return max
}

/**
 * Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva 
 * el promedio de los valores(ej: para [1,3,5,7,20] el promedio es 7.2).
 */

function averageFromArray(array) {
    let sumNums = 0
    for (let x = 0; x <= array.length - 1; x++) {
        sumNums += array[x]
    }
    return sumNums / array.length
}

/**
 * Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50
 * (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
 */

function oddsFromArray(array) {
    let oddNums = []
    for (let x = 1; x <= 50; x++) {
        if (x % 2 !== 0)
            oddNums.push(x)
    }
    return oddNums
}

/**
 * Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
 * Por ejemplo, si arr = [1,3,5,7] y Y = 3, 
 * tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
 */

function arrayMayorThanY(y, array) {
    let mayorThanY = []
    for (let x = 0; x <= array.length - 1; x++) {
        if (array[x] > y)
            mayorThanY.push(array[x])
    }
    return mayorThanY
}

/**
 * Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor 
 * (ej: [1,5,10,-2] será [1,25,100,4]).
 */

function squareArray(array) {
    return array.map(num => num ** 2)
}

/**
 * Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier 
 * número negativo dentro del array por 0.Cuando el programa esté listo, el array no debiera contener 
 * números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0])..
 */

function negativesToZero(array) {
    return array.map(num => (num < 0) ? 0 : num)
}


/**
 * Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un 
 * nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
 * (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
 */

function maxMinAvg(array) {
    let max = 0
    let min = 0
    let sumNums = 0

    for (let x = 0; x <= array.length - 1; x++) {
        if (array[x] > max)
            max = array[x]
        if (array[x] < min)
            min = array[x]
        sumNums += array[x]
    }
    return [max, min, sumNums / array.length]
}

/**
 * Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
 * La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
 */

function interchangeValues(array) {
    let copyArray = array
    let firstNum = copyArray[0]

    copyArray[0] = copyArray[copyArray.length - 1]
    copyArray[copyArray.length - 1] = firstNum

    return copyArray
}

/**
 * De Número a String: Escribe una función que tome un array de números y reemplace 
 * cualquier valor negativo por el string ‘Dojo’. 
 * Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
 */

function negativeToDojo(array){
    return array.map(num => (num < 0) ? 'Dojo' : num)
}