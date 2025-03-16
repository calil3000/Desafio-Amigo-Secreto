//Variáveis de Início:
let amigosArray = [];
let sorteios = 0;

//Adicionar evento listener para que o botão Adicionar seja acionado ao pressionar a tecla Enter:
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addButton').click();
    }
});

//Função para adicionar os nomes ao array:
function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    let nome = amigo.value;

    if (nome === "") {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigosArray.push(nome);
    amigo.value = "";
    amigo.focus();

    //Mostra os nomes inseridos na tela
    let listaAmigos = document.getElementById('listaAmigos');
    // Limpa o array para que o nome anterior não seja repetido quando o próximo for inserido
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigosArray.length; i++) {
        listaAmigos.innerHTML += "<li>" + amigosArray[i] + "</li>";
    }
}

//Função para sortear aleatóriamente um amigo do array amigosArray[] e mostrar na tela:
function sortearAmigo() {
    if (amigosArray.length < 2 && sorteios === 0) {
        alert('Por favor, insira pelo menos dois nomes.');
        return;
    }
        else if (amigosArray.length < 1) {
            alert('Todos os amigos inseridos já foram sorteados. Clique em "Resetar sorteio" para recomeçar.');
            return;
        }


    //Vamos selecionar um item da lista amigosArray[] usando Math.random() para gerar um número aleatório entre 0 e 1, multiplicar pelo comprimento do array e arredondar para o número inteiro mais próximo com Math.floor()
    let amigoSorteado = amigosArray[Math.floor(Math.random() * amigosArray.length)];
    //Vamos descobrir qual o índice do amigo sorteado no array:
    let amigoSorteadoIndex = amigosArray.indexOf(amigoSorteado);
    //Vamos remover o amigo sorteado do array para que ele não seja sorteado novamente
    amigosArray.splice(amigoSorteadoIndex, 1);
    //Vamos contar o número de sorteios feitos:
    sorteios++;

    //Atribui o nome da pessoa sorteada para o id no html "amigoSorteado" e mostra na tela usando innerHTML
    let amigoSorteadoElement = document.getElementById('amigoSorteado');
    amigoSorteadoElement.innerHTML = amigoSorteado;
}

//Função para resetar o sorteio:
function resetarSorteio() {
    // Limpa o array e o número de sorteios
    amigosArray = [];
    sorteios = 0;

    //Limpa a lista de amigos e o amigo sorteado na tela
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('amigoSorteado').innerHTML = "";

    //Define o foco nocamente no campo de inserir nome
    document.getElementById('amigo').focus();
}