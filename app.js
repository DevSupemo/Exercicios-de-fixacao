/*
Nome da equipe:
Francisco Walterson
Gerson Souza
Jessica Lima
Anderlan Lima
*/


const nome = "joão";
const idade = 30; 

// Concatenação 
const frase = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(frase); 

// Interpolação 
const frase2 = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(frase2); 

// If e Else Simples 
if (idade > 20) {
    console.log("Idade maior que 20 anos");
} else {
    console.log("erro_do_sistema");
}


if (idade > 20 && nome === "joão") {
    console.log("deu certo: idade > 20 E o nome é joão");
}

if (!(idade == 20)) {
    console.log("A idade não é 20!");
} 


else if (idade != 20) {
    console.log("A idade é diferente de 20");
}