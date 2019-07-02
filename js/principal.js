var titulo = document.querySelector(".titulo"); 
        titulo.textContent = "Nutricionista Aparecida";
        
var pacientes = document.querySelectorAll(".paciente");

for( i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var imc = peso/(altura*altura);

    if( peso < 0 || peso > 500 ){
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    else if( altura < 0 || altura > 2.5 ){
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    else{
        tdImc.textContent = imc.toFixed(2);
    }
    
}