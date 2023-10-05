'use strict'

{
    // Задача 2


    const rain = Math.round(Math.random());

    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    }

    if (rain === 0) {
        console.log('Дождя нет!');
    }
}


{
    // Задача 3


    const scoreMath = Number(prompt('Введите кол-во баллов по математике:'));
    const scoreRuss = Number(prompt('Введите кол-во баллов по русскому языку:'));
    const scoreInform = Number(prompt('Введите кол-во баллов по информатике:'));

    const scoreAll = scoreMath + scoreRuss + scoreInform;

    if (scoreAll >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else {
        console.log('Возможно, в следующий раз.')
    }
}

{
        // Задача 4

        const sumMoney = Number(prompt('Сколько денег вы хотите снять?'));

        if (sumMoney % 100 === 0) {
            console.log('Выдать ' + sumMoney);
        } else {
            console.log('Введите сумму кратную 100');
        }
}