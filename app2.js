const acao = "sanduiche"; // Você pode mudar para "carregar", "festa" ou "dirigir"


const caboConectado = true;
const carregadorNaTomada = true;
const temPao = true;
const temRecheio = false; 
const idade = 30;
const temIdentidade = true;
const eHabilitado = true;
const temDocumento = true;

switch (acao) {
    case "carregar":
        if (caboConectado && carregadorNaTomada) {
            console.log("1 - Celular carregando com sucesso!");
        } else {
            console.log("1 - Falha: Verifique o cabo ou a tomada.");
        }
        break;

    case "sanduiche":
        if (temPao && temRecheio) {
            console.log("2 - Sanduíche pronto! Pode comer.");
        } else {
            console.log("2 - Erro: Você precisa de pão E recheio.");
        }
        break;

    case "festa":
        if (idade >= 18 && temIdentidade) {
            console.log("3 - Entrada liberada! Divirta-se na festa.");
        } else {
            console.log("3 - Barrado: Precisa ser maior de 18 e ter identidade.");
        }
        break;

    case "dirigir":
        if (eHabilitado && temDocumento) {
            console.log("4 - Tudo certo! Você pode dirigir.");
        } else {
            console.log("4 - Perigo: Você não pode dirigir sem habilitação ou documento.");
        }
        break;

    default:
        console.log("Ação não reconhecida pelo sistema.");
}