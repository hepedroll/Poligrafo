
let perguntas = [
    "deseja começar o interrogatório?",
    "Você sabe qual objeto foi roubado?", // 1 - 6
    "Você entrou na sala do crime no horário em que ocorreu?", // 2 - 3
    "Seu crachá registrou a sua entrada naquele corredor ás 11:00?", // 2 - 3
    "Você estava sozinho no momento do crime?", // 4 - 7
    "Você estava sozinho no seu turno de ontem?", // 5 - 8
    "Você viu o celular sendo roubado?", // 1 - 6
    "Você confirma que estava sozinho naquele momento", // 4 - 7
    "Você tem certeza absoluta de onde estava na hora do roubo?", // 5 - 8
    "Você chegou a encostar no aparelho?", // 9 - 10
    "A pericia vai encontrar suas digitais no aparelho se checarem?" // 9 - 10

];
//


let respostas = [];
let atual = 0;
mostrarPergunta(); 
 
function mostrarPergunta() { 
    document.getElementById("pergunta").innerHTML = perguntas[atual]; 
    document.getElementById("numero").innerHTML = "Pergunta " + (atual + 
1); 
} 
 
function responder() { 
 
    let resposta = document.getElementById("resposta").value; 
 
    if (resposta == "") { 
        alert("Escolha uma resposta!"); 
        return; 
    } 
 
    respostas[atual] = resposta;  
    atual++; 
 
    document.getElementById("resposta").value = ""; 
 
    if (atual < perguntas.length) { 
        mostrarPergunta(); 
    } else { 
        resultado(); 
    } 
} 
 
function resultado() { 
 
    let pontos = 0; 
 
    if (respostas[2] != respostas[7]) pontos++; 
    if (respostas[3] != respostas[4]) pontos++; 
    if (respostas[5] != respostas[8]) pontos++; 
    if (respostas[6] != respostas[9]) pontos++; 
    if (respostas[10] != respostas[11]) pontos++; 

    let mensagem = ""; 
 
    switch (pontos) { 
        case 0: 
            mensagem = "VERDADE! Respostas consistentes."; 
            break; 
 
        case 1: 
            mensagem = "SUSPEITO! Uma contradição."; 
            break; 
 
        default: 
            mensagem = "POSSÍVEL MENTIRA! Várias contradições."; 
    } 
 
    document.getElementById("pergunta").innerHTML = mensagem; 
    document.getElementById("numero").innerHTML = "Fim do interrogatório";
 
    document.getElementById("resposta").style.display = "none"; 
    document.querySelector("button").style.display = "none"; 
    document.getElementById("reiniciar").style.display = "inline-block"; 
} 
 
function reiniciarJogo() { 
    location.reload(); 
} 