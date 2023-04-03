/* Índice de massa corporal feminino */
function calculaImcFeminino() {
    var idade = document.forms["formFeminino"]["idade"].value;
    var altura = document.forms["formFeminino"]["altura"].value;
    var peso = document.forms["formFeminino"]["peso"].value;

    formValidacoes(peso, altura, idade);
    validacoesIdade(idade);

    if (idade != "" && peso != "" && altura != "") {
        var calc = peso / (altura * altura);
        var calculo = calc.toFixed(2);
    }

    if (calculo <= 19) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Magreza");
    } else if ((calculo > 19) && (calculo <= 23.9)) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
    } else if ((calculo > 24) && (calculo <= 28.9)) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
    } else if ((calculo > 29) && (calculo <= 38.9)) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade Grau I");
    } else if (calculo > 40) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade Grau II (severa)");
    }

    if (idade != "" && peso != "" && altura != "") {
        document.getElementById("formFeminino").reset();
        document.forms["formFeminino"].elements[0].focus();
    }
}

/* Índice de massa corporal infantil feminino */
function calculaImcInfantilF() {
    var idade = document.forms["formInfantilF"]["idade"].value;
    var altura = document.forms["formInfantilF"]["altura"].value;
    var peso = document.forms["formInfantilF"]["peso"].value;

    formValidacoes(peso, altura, idade);
    if (idade != "") {
        if (idade <= 0) {
            alert("A idade informada é invalida!");
        }

        if (idade < 6 || idade > 15) {
            alert("A faixa de idade para o calculo do índice corporal infantil é de 6 anos até 15 anos");
        }
    }

    if (idade != "" && peso != "" && altura != "") {
        var calc = peso / (altura * altura);
        var calculo = calc.toFixed(2);
    }

    switch (idade) {
        case "6":
            if ((calculo >= 14.3) && (calculo <= 16.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 16.1) && (calculo <= 17.4)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 17.4) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "7":
            if ((calculo >= 14.9) && (calculo <= 17.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 17.1) && (calculo <= 18.9)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 18.9) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "8":
            if ((calculo >= 15.6) && (calculo <= 18.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 18.1) && (calculo <= 20.3)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 20.3) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "9":
            if ((calculo >= 16.3) && (calculo <= 19.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 19.1) && (calculo <= 21.7)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 21.7) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "10":
            if ((calculo >= 17) && (calculo <= 20.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 20.1) && (calculo <= 23.2)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 23.2) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "11":
            if ((calculo >= 17.6) && (calculo <= 21.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 21.1) && (calculo <= 24.5)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 24.5) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "12":
            if ((calculo >= 18.3) && (calculo <= 22.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 22.1) && (calculo <= 25.9)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 25.9) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "13":
            if ((calculo >= 18.9) && (calculo <= 23)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 21.9) && (calculo <= 27.7)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 27.7) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "14":
            if ((calculo >= 19.3) && (calculo <= 23.8)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 23.8) && (calculo <= 27.9)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 27.9) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "15":
            if ((calculo >= 19.6) && (calculo <= 24.2)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 24.2) && (calculo <= 28.8)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 28.8) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
    }

    if (idade != "" && peso != "" && altura != "") {
        document.getElementById("formInfantilF").reset();
        document.forms["formInfantilF"].elements[0].focus();
    }
}

/* Índice de massa corporal masculino */
function calculaImcMasculino() {
    var idade = document.forms["formMasculino"]["idade"].value;
    var peso = document.forms["formMasculino"]["peso"].value;
    var altura = document.forms["formMasculino"]["altura"].value;

    formValidacoes(peso, altura, idade);
    validacoesIdade(idade);

    if (idade != "" && peso != "" && altura != "") {
        var calc = peso / (altura * altura);
        var calculo = calc.toFixed(2);
    }

    if (calculo <= 18.5) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Magreza");
    } else if ((calculo > 18.5) && (calculo <= 25)) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
    } else if ((calculo > 25) && (calculo <= 30)) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
    } else if ((calculo > 30) && (calculo <= 35)) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade Grau I");
    } else if ((calculo > 35) && (calculo <= 40)) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade Grau II (severa)");
    } else if (calculo > 40) {
        alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade Grau III (morbida)");
    }

    if (idade != "" && peso != "" && altura != "") {
        document.getElementById("formMasculino").reset();
        document.forms["formMasculino"].elements[0].focus();
    }
}

/* Índice de massa corporal infantil masculino */
function calculaImcInfantilM() {
    var idade = document.forms["formInfantilM"]["idade"].value;
    var altura = document.forms["formInfantilM"]["altura"].value;
    var peso = document.forms["formInfantilM"]["peso"].value;

    formValidacoes(peso, altura, idade);
    if (idade != "") {
        if (idade <= 0) {
            alert("A idade informada é invalida!");
        }

        if (idade < 6 || idade > 15) {
            alert("A faixa de idade para o calculo do índice corporal infantil é de 6 anos até 15 anos");
        }
    }

    if (idade != "" && peso != "" && altura != "") {
        var calc = peso / (altura * altura);
        var calculo = calc.toFixed(2);
    }

    switch (idade) {
        case "6":
            if ((calculo >= 14.5) && (calculo <= 16.6)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 16.6) && (calculo <= 18.0)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 18.0) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "7":
            if ((calculo >= 15) && (calculo <= 17.3)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 17.3) && (calculo <= 19.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 19.1) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "8":
            if ((calculo >= 15.6) && (calculo <= 16.7)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 16.7) && (calculo <= 20.3)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 20.3) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "9":
            if ((calculo >= 16.1) && (calculo <= 18.8)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 18.8) && (calculo <= 21.4)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 21.4) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "10":
            if ((calculo >= 16.7) && (calculo <= 19.6)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 19.6) && (calculo <= 22.5)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 22.5) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "11":
            if ((calculo >= 17.2) && (calculo <= 20.3)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 20.3) && (calculo <= 23.7)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 23.7) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "12":
            if ((calculo >= 17.8) && (calculo <= 21.1)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 21.1) && (calculo <= 24.8)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 24.8) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "13":
            if ((calculo >= 18.5) && (calculo <= 21.9)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 21.9) && (calculo <= 25.9)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 25.9) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "14":
            if ((calculo >= 19.2) && (calculo <= 22.7)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 22.7) && (calculo <= 26.9)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 26.9) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
        case "15":
            if ((calculo >= 19.9) && (calculo <= 23.6)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Saudável");
            } else if ((calculo > 23.6) && (calculo <= 27.7)) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Sobrepeso");
            } else if (calculo > 27.7) {
                alert("Idade: " + idade + " anos\nResultado: " + calculo + " kg/m²\nClassificação: Obesidade");
            }
            break;
    }

    if (idade != "" && peso != "" && altura != "") {
        document.getElementById("formInfantilM").reset();
        document.forms["formInfantilM"].elements[0].focus();
    }
}

function checarValorPonto(valor) {
    var validos = /[^0-9\.]/gi

    if (validos.test(valor.value)) {
        valor.value = valor.value.replace(validos, "");
    }
}

function formValidacoes(peso, altura, idade) {
    if (idade == "" && peso == "" && altura == "") {
        alert("Preencha todos os campos!");
    } else if (idade == "" && peso != "" && altura != "") {
        alert("Preencha o campo idade!");
    } else if (idade != "" && peso == "" && altura != "") {
        alert("Preencha o campo peso!");
    } else if (idade != "" && peso != "" && altura == "") {
        alert("Preencha o campo altura!");
    } else if (idade != "" && peso == "" && altura == "") {
        alert("Preencha os campos peso e altura!")
    }
}

function validacoesIdade(idade) {
    if (idade != "") {
        if (idade <= 0) {
            alert("A idade informada é invalida!");
        }

        if (idade < 16 || idade > 60) {
            alert("A faixa de idade para o calculo do índice corporal é de 16 anos até 60 anos");
        }
    }
}