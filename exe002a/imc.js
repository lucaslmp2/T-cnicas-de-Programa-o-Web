function calcular() {
    var pesoElement = document.getElementById("peso");
    var alturaElement = document.getElementById("altura");
    
    var peso = parseFloat(pesoElement.value);
    var altura = parseFloat(alturaElement.value);
    
    if (isNaN(peso) || isNaN(altura)) 
    {
        console.log("Peso e altura devem ser números válidos.");
        return;
    }

    const imc = peso / (altura ** 2);
    console.log("IMC:", imc);
    
  
    if(imc<18.5)
    {
        var resultadoElement = document.getElementById("res")
        resultadoElement.innerHTML = "Seu IMC é: "+imc.toFixed(2)+", seu IMC está abaixo do indicado!"
    }
    if(imc>=18.5&&imc<=24.9)
    {
        var resultadoElement = document.getElementById("res")
        resultadoElement.innerHTML = "Seu IMC é: "+imc.toFixed(2)+", seu IMC está normal!"
    }
    if(imc>=25&&imc<=29.9)
    {
        var resultadoElement = document.getElementById("res")
        resultadoElement.innerHTML = "Seu IMC é: "+imc.toFixed(2)+", seu IMC está apontando sobrepeso!"
    }
    if(imc>=30&&imc<=34.9)
    {
        var resultadoElement = document.getElementById("res")
        resultadoElement.innerHTML = "Seu IMC é: "+imc.toFixed(2)+", seu IMC está apontando Obesidade grau I!"
    }
    if(imc>=35&&imc<=39.9)
    {
        var resultadoElement = document.getElementById("res")
        resultadoElement.innerHTML = "Seu IMC é: "+imc.toFixed(2)+", seu IMC está apontando Obesidade grau II!"
    }
    if(imc>=40)
    {
        var resultadoElement = document.getElementById("res")
        resultadoElement.innerHTML = "Seu IMC é: "+imc.toFixed(2)+", seu IMC está apontando Obesidade grau III ou mórbida!"
    }else
    {
        console.log("IMC:", imc);
    }
}