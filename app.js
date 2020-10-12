// VARIABLES
const calcularBtn = document.getElementById('btn-calcular');
const mesesInput = document.getElementById('meses');
const añosInput = document.getElementById('años');
const resultado = document.getElementById('resultado');
let mesesGato, añosGato, añosHumano;

// EVENT LISTENERS
mesesInput.addEventListener('change', calcularMeses);
añosInput.addEventListener('change', calcularAños);
calcularBtn.addEventListener('click', calculadora);

// FUNCIONES
function calcularMeses(e) {
    mesesGato = e.target.value;

    if(mesesGato <= 2) {
        añosHumano = mesesGato;
    } else if (mesesGato <= 7) {
        añosHumano = 2 * mesesGato - 2;
    } else if (mesesGato <= 9) {
        añosHumano = 13;
    } else if (mesesGato <= 11) {
        mesesGato = 14;
    } else {
        añosHumano = mesesGato + 3;
    }
}

function calcularAños(e) {
    añosGato = e.target.value;

    if (añosGato === 1) {
        añosHumano = 15;
    } else {
        añosHumano = (16 + 4 * añosGato);
    }
}

function calculadora(e) {
    e.preventDefault();
    limpiarHTML();
    const resultadoHTML = document.createElement('h3');

    if((mesesGato === undefined && añosGato === undefined) || (mesesGato === 0 || añosGato === 0)) {
        resultadoHTML.textContent = `Tenes que seleccionar un campo`;
    } else {
        resultadoHTML.textContent = `Tu gato tiene ${añosHumano} años humanos`;
    }
    resultado.appendChild(resultadoHTML);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
        ;
    }
}