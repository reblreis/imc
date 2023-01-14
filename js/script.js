// ação de clicar é o javascript, manipula o html
//alert("Olá mundo!");

var peso = document.getElementById('peso');

peso.addEventListener('keyup',function(e){
    //console.log(e);    
    //console.log(e.key);
    if(e.key == 'Enter'){
        calcularImc();
    }

})


function calcularImc(){ //imc = peso / altura²
//alert("ok");

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    //console.log(altura);
    //console.log(peso);

    if(altura != "" && peso != ""){

        var imc = peso / (altura * altura);
        console.log(imc);

        //var resultado = document.getElementByClassName("resultado-imc);")
        var resultado = document.getElementById("resultado");
        var valorImc = document.getElementById("valorImc");
        var ajuda = document.getElementById("ajuda");

        //console.log(resultado);
        resultado.style.visibility = "visible"; //exibe a div
        valorImc.innerHTML = imc.toFixed(2); //inserindo um conteúdo no html

        if(imc < 18.5 || imc >= 30){
            resultado.style.backgroundColor = "red";
            ajuda.style.visibility = "visible";
        }

        else if(imc >= 18.5 && imc <= 24.9){
            resultado.style.backgroundColor ="green";
            ajuda.style.visibility = "hidden";
        }

        else if(imc >= 25 && imc <= 29.9){
            resultado.style.backgroundColor = "orange";
            ajuda.style.visibility = "visible";
        }

    }else{
        alert("Preencha todos os campos!");
    }
   
}                
        