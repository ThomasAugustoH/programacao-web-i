function soma() {
    var soma = parseFloat(document.getElementById('n01').value) + parseFloat(document.getElementById('n02').value);
    document.getElementById('divResultado').innerHTML = "Resultado: " + soma;
}

function avaliar() {
    var n1 = parseFloat(document.getElementById('n01').value);
    var n2 = parseFloat(document.getElementById('n02').value);

    if (n1 > n2) {
        primeiroMaior();
    } else if (n2 > n1) {
        segundoMaior();
    } else {
        numerosIguais();
    }
}

function primeiroMaior() {
    var divAvaliar = document.getElementById('divAvaliar');
    divAvaliar.innerHTML = "Primeiro número é maior";
    divAvaliar.classList.add('vermelho')
    divAvaliar.classList.remove('verde', 'amarelo');
}

function segundoMaior() {
    var divAvaliar = document.getElementById('divAvaliar');
    divAvaliar.innerHTML = "Segundo número é maior";
    divAvaliar.classList.add('verde')
    divAvaliar.classList.remove('vermelho', 'amarelo');
}

function numerosIguais() {
    var divAvaliar = document.getElementById('divAvaliar');
    divAvaliar.innerHTML = "Ambos são iguais";
    divAvaliar.classList.add('amarelo')
    divAvaliar.classList.remove('vermelho', 'verde');
}

function exibirConteudo() {
    document.getElementById('conteudo').innerHTML = document.getElementById('texto').value;
}

function calcularTamanho() {
    document.getElementById('tamanho').innerHTML = "O tamanho atual do campo é de: " + document.getElementById('conteudo').innerHTML.length;
}

function expandirTabela() {
    var tabela = document.getElementById('tabelaExpansao').getElementsByTagName('tbody')[0];
    var linha = tabela.insertRow();
    linha.insertCell(0);
    linha.insertCell(1);
    linha.insertCell(2);
}

function contarElementos() {
    var elementos = document.getElementsByTagName("*");
    var i = 0;
    var listaElementos = '';
    while (elementos[i] != null) {
        listaElementos += elementos[i].tagName + " ";
        i++;
    }
    msg = "Quantidade de elementos HTML: " + elementos.length + " ( " + listaElementos + ")";
    document.getElementById('divContar').innerHTML = msg;
}

function clicarComida(id) {
    alert(document.getElementById(id).innerHTML);
}

function corAleatoria() {
    let cor = Math.floor(Math.random() * 255) + ", " + 0 + ", " + 0;
    return cor
}

function avermelhar(id) {
    var elemento = document.getElementById('celula' + id);
    elemento.style.backgroundColor = "red";
}