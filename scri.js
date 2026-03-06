const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite a largura do terreno retângular: "));

let num2 = parseInt(prompt("Digite a altura do terreno retângular: "));

let resultado = num * num2;

console.log("O resultado da área do terreno retângular é: " + resultado);
