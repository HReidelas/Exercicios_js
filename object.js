const prompt = require('prompt-sync')();
let pessoa = {
    nome: prompt("qual seu nome?"),
    idade: parseInt(prompt("qual sua idade?")),
    altura: parseFloat(prompt("qual sua altura?")),
    cpf: prompt("qual seu cpf?"),
};

console.log(pessoa.nome); // João
console.log(pessoa.idade);  // 30
console.log(pessoa.altura); // 1.75
console.log(pessoa.cpf);    // 123.456.789-00
