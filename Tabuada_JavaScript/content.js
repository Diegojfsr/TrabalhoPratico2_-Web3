var valor = document.getElementById('1')
var valor1 = document.getElementById('2')
var valor2 = document.getElementById('3')

var tabuada = document.querySelector("div.container div.tabuada")
const calcular = document.querySelector("div.container button")


calcular.addEventListener("click", () => {
    tabuada.innerHTML = ""//recebe a frase caso o valor do imput esteja errado

    if(Number(valor.value) < 1 || Number(valor.value) > 10){  //Recebe os valores do imput e converte ara o tipo number      
        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 10"
    }
    else if(Number(valor1.value) < 1 || Number(valor1.value) > 10){  //Recebe os valores do imput e converte ara o tipo number      
        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 10"
    }
    else if(Number(valor2.value) < 1 || Number(valor2.value) > 10){  //Recebe os valores do imput e converte ara o tipo number      
        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 10"
    }
    else{

        for(i = valor1; i <= valor2; i++){
            var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);
            var resultado = document.createElement("p")
            resultado.innerText = calc
            tabuada.appendChild(resultado)
        }
    }

})

