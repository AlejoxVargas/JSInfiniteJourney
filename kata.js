/* Kata: Explorando Variables en JavaScript */

// Declaración de variables
let nombre = "Alejo";
let edad = 20;

// Operaciones básicas
const a = 10;
const b = 5;

let suma = a + b;
console.log(suma);

let resta = b - a;
console.log(resta);

let multiplicacion = a * b;
console.log(multiplicacion);

let division = a / b;
console.log(division);

// Concatenación de Cadenas

const ciudad = "Mérida";
const pais = "Venezuela";

const ubicacion = ciudad + ", " + pais;
console.log(ubicacion);

// Tipos de datos

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof ubicacion);

// Presentación en consola

console.log(
    "Hola, me llamo " +
    nombre +
    ", " +
    "tengo " +
    edad +
    " años" +
    " y vivo en " +
    ubicacion
);

/* Kata: Explorando Funciones en JavaScript */

// Declaración de funciones

function saludar() {
    console.log("¡Hola bienvenido!");
}

saludar();

// Funciones con parámetros

function sumar(num1, num2) {
    return num1 + num2;
}

console.log("Suma de función con parametros: " + sumar(5, 10)); //Salida 15

// Funciones con valor de retorno

function calcularEdad(yearOfBirthday) {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    return (edad = añoActual - yearOfBirthday);
}
console.log("Edad actual: " + calcularEdad(2003));

// Funciones condicionales

function rangoEdad(yearOfBirthday) {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    let edad = añoActual - yearOfBirthday;

    if (edad >= 18) {
        return "mayor de edad";
    } else {
        return "mayor de edad";
    }
}

console.log(rangoEdad(20));

// Funciones Anónimas

let multiplicar = (function (num1, num2){
    return num1 * num2;
})
console.log(multiplicar(5,10));

// Funciones como argumentos:

function ejecutarOperacion(num1, num2, funcion){
    return funcion(num1,num2);
}
console.log(ejecutarOperacion(5, 5, multiplicar));

/* Kata: Explorando Scope en JavaScript */

// Ambito global
let variableGlobal = "Soy una variable global";

function pruebaVariable(){
    console.log(variableGlobal);
}
pruebaVariable();
console.log(variableGlobal);

// Ámbito local

function funcionLocal(){
    let variableLocal = "Soy una variable local";
    console.log(variableLocal);
}
funcionLocal();
/**
 * console.log(variableLocal);
 * no toma la referencia ya que solo existe dentro de la funcion
 */

// Ámbito de bloque

if(true){
    let variableBloque = "Soy una variable de bloque dentro de un if";
    console.log(variableBloque);
}

/**
 * console.log(variableBloque);
 * let variableBloque tiene un alcance de bloque y no está disponible fuera del mismo.
 */

// Ámbito de función y global

function funcionYGlobal(){
     var variableFuncionGlobal = "Ámbito de Función y global:"
     console.log(variableFuncionGlobal);
}

funcionYGlobal();
//variableFuncionGlobal tiene un alcance local y no está disponible fuera de la función

// Ámbito de función y local

function funcionYLocal(){
    let variableFuncionLocal = "Ámbito de Función y Local:"
    console.log(variableFuncionLocal);
}

funcionYLocal();
//NO se puede la variable local no tiene acceso al global