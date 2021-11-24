let calculo = document.getElementById("calculo")

function imc(){

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        alert('Valor Preenchido');
    }else{
        resultado.textContent = ("Preencha todos os campos");
    }

}


calculo.addEventListener('click', imc);


