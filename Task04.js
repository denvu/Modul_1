const productAmount = prompt('Введите сумму товара:');
const productSum = prompt('Введите количество товара:');
const promoCode = prompt('Введите промокод');


const calculate = () => {
    
    //общая сумма корзины
        let discountSumProduct = '';

        if (productSum > 10) {
            discountProductSum = productAmount * 0.03;
        } else {
            discountProductSum = 0;
        }

        //количество товаров в корзине
        let discountProductAmount = '';

        if (productAmount > 30000) {
            discountProductAmount = (productAmount - 30000) * 0.15;
        } else {
            discountProductAmount = 0;
        }

        //промокод
        let discountPromoCode = '';
        let discountPrice = productAmount - discountSumProduct - discountProductAmount;

        if (promoCode == 'METHED') {
            discountPromoCode = productAmount * 0.1;
        } else if (promoCode == 'G3H2Z1' && discountPrice > 2000) {
            discountPromoCode = productAmount - (productAmount - 500);
        } else {
            discountPromoCode = 0;
        }

        return discountProductSum + discountProductAmount + discountPromoCode;


}

const result = calculate();
alert('Ваша скидка ' + result + ' рублей');