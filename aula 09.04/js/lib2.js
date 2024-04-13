class Carro {
    fabricante = '';
    constructor(pNome) {
        this.fabricante = pNome;
    }

    getFabricante() {
        return this.fabricante;
    }
}

class Modelo extends Carro {
    modelo = '';
    constructor(pNome, pModelo) {
        super(pNome);
        this.modelo = pModelo;
    }

    getModelo() {
        return this.modelo;
    }
    getCompleto() {
        return "Fabricante: " + this.fabricante + " Modelo: " + this.modelo;
    }
}

function calcula(a,b) {
    vSoma = a + b;
    vSubtrai = a - b;
    vMultiplica = a * b;
    vDivide = a / b;

    return [vSoma, vSubtrai, vMultiplica, vDivide];
}

function somatorio(...pNumeros) {
    var vSoma = 0;
    for (let vNumero of pNumeros) {
        vSoma += pNumeros;
    }
    return vSoma;
}