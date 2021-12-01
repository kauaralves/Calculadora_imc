const calculo = document.getElementById("calculo")

function imc(){

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorIMC < 18.5){

           classificacao = "abaixo da média";

        }
        else if(valorIMC < 25){

            classificacao = "ideal, parabéns!";

        }
        else if(valorIMC < 30){

            classificacao = "levemente acima do peso";

        }
        else if(valorIMC < 35){

            classificacao = "com obesidade grau I";

        }
        else if(valorIMC < 40){

            classificacao = 'com obesidade grau II';

        }else{
            classificacao = "com obesidade grau III. cuidado";
        }

        resultado.textContent = (`${nome} seu IMC é ${valorIMC} e está ${classificacao}`);
        
    }

}
calculo.addEventListener( 'click', imc);
