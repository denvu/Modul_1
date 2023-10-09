
const sumEur = Number(prompt('Введите стоимость покупки в евро:'));

const calсСonversion = () => {
    let value = sumEur * 1.2 * 64;
    return value;
}

alert ('Стоимость покупки в рублях составляет ' + calсСonversion () + ' рублей');