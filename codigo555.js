// Elementos
let divJogos = document.getElementById("jogos");
let inpQtd = document.getElementById("qtd");

/**
 * Limpa a tabela de resultados.
 */
function limpar() {
    divJogos.innerHTML = "";
}

/**
 * Gera todos os jogos.
 */
function gerarJogos() {
    // Prepara para armazenar os resultados
    let jogos = [];

    // Obtém a quantidade de jogos a ser gerada
    let qtd = inpQtd.value;

    // Gera um novo jogo único e adiciona aos resultados
    for (let i = 0; i < qtd; i++) {
