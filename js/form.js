var btnAdiciona = document.querySelector("#adicionar-paciente");
btnAdiciona.addEventListener("click", cadastrar);

function cadastrar(){

    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = pegaDadosDoForm(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMsgsDeErro(erros);   
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

}

function pegaDadosDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente) {

    var erros = [];

    if( paciente.nome.length == 0 ) {
        erros.push("O nome não pode ser em branco!");
    }

    if( !validaPeso(paciente.peso) ) {
        erros.push("Peso inválido!");
    }

    if( paciente.peso.length == 0 ) {
        erros.push("O peso não pode ser em branco!");
    }

    if( !validaAltura(paciente.altura) ) {
        erros.push("Atura inválida!");
    }

    if( paciente.altura.length == 0 ) {
        erros.push("A altura não pode ser em branco!");
    }

    if( paciente.gordura.length == 0 ) {
        erros.push("A gordura não pode ser em branco!");
    }

    return erros;

}

function exibeMsgsDeErro(erros) {
    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(e) {
        var li = document.createElement("li");
        li.textContent = e;
        ul.appendChild(li);
    });

}