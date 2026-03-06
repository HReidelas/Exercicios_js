const prompt = require('prompt-sync')();

let numero = prompt('Digite um número: '); 
numero = parseInt(numero);

let resto = numero % 2; // Armazena o resto da divisão
let par_impar = (resto === 0) ? 'par' : 'ímpar';

console.log('O valor é ' + par_impar + ' (Resto: ' + resto + ')');
