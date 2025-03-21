/// 1. Declarar una variable
let age = 20

// Implemento una condicional/estructura de control/ If ... else
if (age >= 18) {
    console.log("ERES MAYOR DE EDAD");
}else {
    console.log("ERES MENOR DE EDAD");
}

// Vamos a escribir un programa que solicite a un usuario 
// que  ingrese su edad y saber si esa persona es mayor o menor de edad

// prompt sirve para pedir datos al usuario palabra/string/cadena
/* let ageUSer = window.prompt("¿CUANTOS AÑOS TIENES?");

if(ageUser >= 18){
    console.log("ERES MAYOR DE EDAD");
}else{
    console.log("ERES MENOR DE EDAD")
}
 */
//...
const user = window.prompt("¿CUAL ES TU NOMBRE?");
const baseDeDatos = "Adriana";

//...
console.log("¿EL USUARIO ES EL MISMO?");
console.log(user == baseDeDatos);

console.log("Si son diferentes, debo de sacarlo de la app");
console.log(user != baseDeDatos);

console.log("El usuario es bienvenido a la app");

if(user != baseDeDatos)
{
    console.log("EL USUARIO NO ES EL MISMO");
    alert("¡Adios, no eres bienvenido a la app!");
}else {
    console.log("EL USUARIO ES EL MISMO");
    alert("Bienvenido a la app");
}

