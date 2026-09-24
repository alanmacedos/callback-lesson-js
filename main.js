// const notas = [4, 7, 9, 2, 10];

// const aprovados = notas.filter(n => n >= 7);
// console.log(aprovados); // [7, 9, 10]

// function dobrarValor (vetor) {
//     console.log(vetor.map(n => n * 2));
// }

// dobrarValor(aprovados);

// 01

// Complete a função abaixo:
// function somar(n1, n2) {
//   return n1 + n2;
// }

// function executarOperacao(a, b, operacaoCallback) {
//   return operacaoCallback(a, b);
// }

// // Teste:
// console.log(executarOperacao(10, 5, somar));

// 02

// function formatarNome(nome) {

//   return "Aluno: " + nome;
// }

// function processarLista(lista, callback) {

//   for (let i = 0; i < lista.length; i++) {
//     console.log(callback(lista[i]));
//   }
// }

// const alunos = ["Ana", "Carlos", "Beatriz"];

// // Chame processarLista enviando 'alunos' e 'formatarNome':
// processarLista(alunos, formatarNome);

// 03

// Use setTimeout dentro da função baixarArquivo(nomeArquivo, callbackFinal) para aguardar 1 segundo e executar o callback final.

// function arquivoBaixado (arquivo) {

//     return "Arquivo baixado: "+ arquivo;
// }

// function baixarArquivo (nomeArquivo, callbackFinal) {
//     setTimeout( () => {

//         console.log(callbackFinal(nomeArquivo));
//     }, 1000);
    
//     console.log("Baixando "+ nomeArquivo +"...");
// }

// baixarArquivo("aula.txt", arquivoBaixado);

// 04
// Crie uma função filtrarNumeros(lista, callbackCondicao)
// que percorra a lista e retorne um novo array apenas com os itens para os quais callbackCondicao(item) retornar true.

// let numeros = [1, 2, 3, 4, 5, 6];

// function verificaPar (numero) {
//     if (numero % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function filtrarNumeros (array, callback) {

//     return array.filter(callback);
// }

// console.log(filtrarNumeros(numeros, verificaPar));

// 05
// Use o método nativo .map() passando um callback no formato arrow function
// para aplicar 10% de desconto em cada item da lista de preços (multiplicar por 0.9).

// const precos = [100, 200, 50, 300];

// const precosDesconto = precos.map(n => n * 0.9);

// console.log(precosDesconto);

// 06
// Complete a função validarEmail(email, callbackSucesso, callbackErro).
// Se o email contiver o caractere "@", invoque callbackSucesso(), senão invoque callbackErro().

// function emailInvalido () {
//     console.log("Email inválido!");
// }

// function emailValido () {
//     console.log("Email válido");
// }

// function validarEmail (email, callbackSucesso, callbackErro) {
//     if (email.includes("@")) {
//         callbackSucesso();
//     } else {
//         callbackErro();
//     }
// }

// validarEmail("alanmacedo0908@gmail.com", emailValido, emailInvalido);

// 07
// Use o método .find() com um callback para encontrar o usuário com id === 2 na lista de usuários.

// const usuarios = [
//   { id: 1, nome: "Alice" },
//   { id: 2, nome: "Bruno" },
//   { id: 3, nome: "Carla" }
// ];

// const ID2 = usuarios.find(n => n.id === 2);

// console.log(ID2);

// 08
// Ordene os produtos do mais barato para o mais caro
// usando o método .sort() com uma função callback comparadora (a, b) => a.preco - b.preco.

// const produtos = [
//   { item: "Teclado", preco: 150 },
//   { item: "Mouse", preco: 80 },
//   { item: "Monitor", preco: 900 }
// ];

// function comparadora (a, b) {

//     return a.preco - b.preco;
// }

// const newArray = produtos.sort((a, b)=> comparadora(a, b));

// console.log(newArray);

// 09
// Use .reduce() com um callback acumulador para somar todos os valores do carrinho de compras.

// const carrinho = [25, 15, 60, 100];

// const totalCarrinho = carrinho.reduce((total, produto) => {
//     return total + produto;
// }, 0)

// console.log(totalCarrinho);

// 10
// Crie uma função formatarTexto(frase, callbackFormatador) que receba uma frase e retorne o resultado de chamar callbackFormatador(frase).

// function caixaAlta (texto) {
//     return texto.toUpperCase();
// }

// function formatarTexto (frase, callbackFormatador) {
//     return callbackFormatador(frase);
// }

// console.log(formatarTexto("Aula Js", caixaAlta));