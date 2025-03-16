//Variáveis de Início://
let nomesArray = [];

//Função para adicionar os nomes ao array://
function adicionarAmigo() {
    let inputNome = document.getElementById('inputNome');
    let nome = inputNome.value;

    if (nome === "") {
        alert('Por favor, insira um nome válido.');
        return;
    }

    nomesArray.push(nome);
    inputNome.value = "";
    inputNome.focus();

    let listaNomes = document.getElementById('listaNomes');
    listaNomes.innerHTML = "";

    for (let i = 0; i < nomesArray.length; i++) {
        listaNomes.innerHTML += "<li>" + nomesArray[i] + "</li>";
    }
}