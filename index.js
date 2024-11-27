// Declaração de variáveis
let nomeHeroi = "Homem Aranha";
let xpHeroi = 9500; // Exemplo de quantidade de XP

// Estrutura de decisão para determinar o nível com base na quantidade de XP
let nivel;

if (xpHeroi < 1000) {
    nivel = "ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "cobre";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "platina diamante";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "imortal";
} else {
    nivel = "radiante";
}

// Exibição da mensagem
console.log(`O Heroi de nome ${nomeHeroi} está no nível de ${nivel}.`);