//1ª aula
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//2ª aula - 
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //validação do peso e altura
    var pesoEhValido = validaPeso(peso); //true ou false
    var alturaEhValida = validaAltura(altura); //true ou false

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc (peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 300) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.00) {
        return true;
    }else{
        return false;
    }
}

function calculaImc (peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}