///aula 4 - eventos e formulários

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //extraindo dados do form
    var paciente = obtemPacienteDoFormulario(form);
    //cria a tr do paciente
    var pacienteTr = montaTr(paciente);
    //valida o paciente
    var erros = validaPaciente(paciente);
    if (erros.length > 0){
        exibeMensagensDeErro(erros);        
        return;
    }

    //pega a tabela
    var tabela = document.querySelector("#tabela-pacientes");
    //inclui a tr criada no form dentro da tabela
    tabela.appendChild(pacienteTr);
    //apagar dados depois de enviar
    form.reset();
    //apagar todas as mensagens de erro após incluir com sucesso
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario (form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

 //cria os elemntos que serão incluidos na tabela
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;

    // var nomeTd = montaTd(paciente.nome, "info-nome");
    // var pesoTd = montaTd(paciente.peso, "info-peso");
    // var alturaTd = montaTd(paciente.altura, "info-altura");
    // var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    // var imcTd = montaTd(paciente.imc, "info-imc");   

    // //colocar as td dentro da tr
    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome deve ser preenchido!");
    }
    if(!validaPeso(paciente.peso)){  
        erros.push("Peso é inválido!");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura deve ser preenchida!");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso deve ser preenchido!");
    }    
    if(paciente.altura.length == 0){
        erros.push("A altura deve ser preenchida!");
    }
    return erros;
}