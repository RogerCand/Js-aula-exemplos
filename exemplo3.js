var custo = 40000;
var distribuidor = custo * 0.30;
var imposto = custo * 0.75;
var valorCarro = custo + distribuidor + imposto;

console.log(`O custo de fábrica é R$${custo}, o valor do distribuidor é R$${distribuidor}, o valor do imposto é R$${imposto}.`)
console.log(`O valor final do carro é R$ ${valorCarro}.`)