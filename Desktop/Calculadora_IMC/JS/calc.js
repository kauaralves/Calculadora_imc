let calculo = document.getElementById("calculo")

function imc(){

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        let valorIMC = Math.round(peso / (altura * altura));

        resultado.textContent = (`Seu IMC é ${valorIMC}`);

        /*
        if (valorIMC < 17){

            resultado.textContent = valorIMC("Seu IMC está abaixo dos recomendados");         
   
        }
        if (valorIMC > 17, valorIMC < 34){

            resultado.textContent = valorIMC("Seu IMC está entre o recomendado");

        }
        if(valorIMC > 34){

            resultado.textContent = valorIMC("Seu IMC está muito alto!");

        }
        */

    }else{
       // resultado.textContent = "Preencha os campos.";
    }

}


calculo.addEventListener( 'click', imc);
