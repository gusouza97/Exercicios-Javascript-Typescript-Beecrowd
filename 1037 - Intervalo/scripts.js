"use strict";
// TRABALHANDO COM ENUMs
var resultStatus;
(function (resultStatus) {
    resultStatus[resultStatus["Fora_Intervalo"] = 0] = "Fora_Intervalo";
    resultStatus[resultStatus["Primeiro_Intervalo"] = 1] = "Primeiro_Intervalo";
    resultStatus[resultStatus["Segundo_Intervalo"] = 2] = "Segundo_Intervalo";
    resultStatus[resultStatus["Terceiro_Intervalo"] = 3] = "Terceiro_Intervalo";
    resultStatus[resultStatus["Quarto_Intervalo"] = 4] = "Quarto_Intervalo";
})(resultStatus || (resultStatus = {}));
// TRABALHANDO COM ARRAYs
let array = [
    [0, 25],
    [25, 50],
    [50, 75],
    [75, 100],
];
let value;
let result;
// Require value user
value = parseInt(prompt("Digite o valor"));
// FUNÇÕES
// Calculando qual trecho pertence o valor
const calcIntervalo = (array, value) => {
    let result = resultStatus.Fora_Intervalo;
    if (value >= array[0][0] && value < array[0][1]) {
        result = resultStatus.Primeiro_Intervalo;
    }
    if (value >= array[1][0] && value < array[1][1]) {
        result = resultStatus.Segundo_Intervalo;
    }
    if (value >= array[2][0] && value < array[2][1]) {
        result = resultStatus.Terceiro_Intervalo;
    }
    if (value >= array[3][0] && value <= array[3][1]) {
        result = resultStatus.Quarto_Intervalo;
    }
    return result;
};
// Apresentando resultado para o usuario
const textResult = (result) => {
    let msg;
    console.log(result);
    switch (result) {
        case resultStatus.Fora_Intervalo:
            msg = "Fora do Intervalo";
            break;
        case resultStatus.Primeiro_Intervalo:
            msg = "Intervalo [0, 25]";
            break;
        case resultStatus.Segundo_Intervalo:
            msg = "Intervalo [25, 50]";
            break;
        case resultStatus.Terceiro_Intervalo:
            msg = "Intervalo [50, 75]";
            break;
        case resultStatus.Quarto_Intervalo:
            msg = "Intervalo [75, 100]";
            break;
        default:
            msg = "Nenhum valor atribuido, tente novamente!";
            break;
    }
    return msg;
};
// EXECUTANDO A FUNÇÃO 
// Verifica intervalo
result = calcIntervalo(array, value);
// Apresenta intervalo usuario
alert(textResult(result));
