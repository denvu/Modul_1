const str = prompt('Введите текст');

const getReversalText = () => {
    const newStrOne = str[0].toUpperCase();

    const newStrTwo = str.substring(1).toLowerCase();

    const newText = newStrOne + newStrTwo;

    return newText;
}

const result = getReversalText ();
console.log(result);
