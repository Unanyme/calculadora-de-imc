function calcularIMC() {
    let peso = Number(document.getElementById('ipeso').value);
    let altura = Number(document.getElementById('ialtura').value);
    let nome = document.getElementById('inome').value;
    let resultado = document.getElementById('res');

    // converter altura para metros
    altura = altura / 100;

    let imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    resultado.innerHTML = `Olá ${nome}! <br>
    Seu peso é ${peso}Kg, sua altura é ${altura.toFixed(2)}m <br> 
    Seu IMC é ${imc.toFixed(2)} <br>
    Classificação: <strong>${classificacao}</strong>`;
}
