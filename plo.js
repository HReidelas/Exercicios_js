const prompt = require('prompt-sync')();
//const prompt = require('prompt-sync')(); para importar a biblioteca prompt-sync e permitir a entrada de dados do usuário no terminal.
//npm install prompt-sync
//node plo.js
let a = prompt("Digite um número:"); // O usuário digita 5
a = parseInt(a); // Converte a string para um número inteiro
let b = prompt("Digite outro número:"); // O usuário digita 10
b = parseInt(b); // Converte a string para um número inteiro
console.log("O valor da soma é: " + (a + b)); // 15 
console.log("O valor da subtração é: " + (b - a)); // 5
console.log("O valor da multiplicação é: " + (a * b)); // 50
console.log("O valor da divisão é: " + (b / a)); // 2
console.log("O valor do módulo é: " + (b % a)); // 0
console.log("O valor da potência é: " + (a ** 2)); // 25
//console.log("vamos aplicar o parseInt no resultado de uma operação:" )
//console.log(parseInt(a / b)); // 0