// Crear array
let names = ["Edwin", "Merary", "Roy", "Junior", "Estebam", "Ana", "Brenda", "Pablo"];
let age = [21, 47, 47, 28, 25, 34, 44, 31];

// Acceder al arreglo de nombres en el índice 3, 5, 7 y 100
console.log(`Nombre en el 3: ${names[3]}`); 
console.log(`Nombre en el 5: ${names[5]}`); 
console.log(`Nombre en el 7: ${names[7]}`); 
console.log(`Nombre en el 100: ${names[100]}`); 

//Acceder al arreglo de edades en el índice 7, 1, 3 y 100
console.log(`Edad en el 7: ${age[7]}`);
console.log(`Edad en el 1: ${age[1]}`); 
console.log(`Edad en el 3: ${age[3]}`); 
console.log(`Edad en el 100: ${age[100]}`); 

// Cambiar los índices 4,5,6 a otro valor de cada arreglo.
names[4] = "Jose";
names[5] = "Christian";
names[6] = "Michelle";

age[4] = 50;
age[5] = 24;
age[6] = 32;

// Ver los cambios en los arrays
console.log("Despues de modificar los array:");
console.log(`Nombres: ${names}`);
console.log(`Edades: ${age}`);
