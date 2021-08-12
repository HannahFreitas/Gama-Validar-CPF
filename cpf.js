function validaCPF(cpf) {
    if(cpf.length != 11) {
        return false; 
    }
    else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        
        console.log("Os números do CPF são " + numeros);
        console.log("Os dígitos do CPF são " + digitos);

        var soma = 0;
        for(var i = 10; i > 1; i --) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //Validação do primeiro dígito 
        if(resultado != digitos.charAt(0)) {
            return false;
        }
        
        console.log(digitos.toString().charAt(0) + " é a primeira variável soma");

        soma = 0;
        numeros = cpf.substring(0, 10);

        for(var k = 11; k > 1; k --) {
            soma += numeros.charAt(11 - k) * k;
        }
        console.log(soma);

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

//Validação do segundo dígito 
        if(resultado != digitos.charAt(1)) {
            return false;
        }
        console.log(digitos.toString().charAt(1) + " é a segunda variável soma");

        return true;
    }
}


function validacao() {
    console.log("Iniciando a validação de CPF");
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var cpf = document.getElementById("cpf_digitado").value;
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById("success").style.display = "block";
    }
    else {
        document.getElementById("error").style.display = "block";
    }
}