const prompt = require('prompt-sync')();//importar prompt-sync 

let preco = prompt("Digite o preço do produto: "); //entrada do preço pelo usuario

preco = parseFloat(preco);    //calcular o preço final 
let valorDesconto = preco * (20 / 100);
let precoFinal = preco - valorDesconto;


console.log("O preço final do produto é: " + precoFinal); //mostrar o resultado

