function minhaFuncao() {
    alert('Esse é um alerta!');
}

function outraFuncao(pMensagem) {
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