//1ª aula
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//2ª aula - 
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

//validação do peso e altura
var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 300){
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00){
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (pesoEhValido && alturaEhValida){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}




