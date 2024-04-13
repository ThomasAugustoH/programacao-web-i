function minhaFuncao() {
    alert('Esse é um alerta!');
}

function outraFuncao(pMensagem = 'Não foi passado parâmetro') {
    alert(pMensagem);
}

function alteraDiv() {
    document.getElementById('div1').innerHTML = "Muda conteúdo";
}

function alteraBg() {
    let vElemento = document.getElementById('mensagem');
    let cor = corAleatoria();
    vElemento.style.backgroundColor = "rgb(" + cor + ")";
    vElemento.style.fontFamily = "Verdana";
    vElemento.style.textAlign = "center";
}

function corAleatoria() {
    let cor = Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255);
    return cor
}

function ativaSucesso() {
    let vElemento = document.getElementById('mensagem');
    vElemento.classList.add('sucesso');
    vElemento.classList.remove('cuidado', 'erro');
}

function ativaCuidado() {
    let vElemento = document.getElementById('mensagem');
    vElemento.classList.add('cuidado');
    vElemento.classList.remove('sucesso', 'erro');
}

function ativaErro() {
    let vElemento = document.getElementById('mensagem');
    vElemento.classList.add('erro');
    vElemento.classList.remove('sucesso', 'cuidado');
}

function setInfo() {
    localStorage.setItem("nome", "Eduardo");
    localStorage.setItem("objeto", "{nome: 'Eduardo', emprego: 'DJ'}");
}

function delInfo() {
    localStorage.removeItem("nome");
}

function criaElemento() {
        var vElemento = document.createElement('p');
        vElemento.innerHTML = "Conteúdo novo"
        var vElementoPai = document.getElementById('elementoPai');
        vElementoPai.appendChild(vElemento);
}

var vItem = 2;
function criaItem() {
    var vNovoItem = document.createElement('li');
    vNovoItem.innerHTML = 'Item ' + vItem;
    vItem++;
    document.getElementById('lista').appendChild(vNovoItem);
}

function removaItem() {
    document.getElementById('lista').lastChild.remove();
}

function insereLinha() {
    var vTabela = document.getElementById('tabela');
    var vLinha = vTabela.insertRow(-1);
    var vCell1 = vLinha.insertCell(0);
    var vCell2 = vLinha.insertCell(1);
    var vCell3 = vLinha.insertCell(2);
    vCell1.innerHTML = "Nova col 1";
    vCell2.innerHTML = "Nova col 2";
    vCell3.innerHTML = "Nova col 3";
}

function somatorio(...pNumeros) {
    var vSoma = 0;
    for (let vNumero of pNumeros) {
        vSoma += vNumero;
    }
    return vSoma;
}