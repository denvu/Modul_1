const str = prompt('Введите текст');

const getReversalText = () => {
  
    const newText = str.split("").reverse().join("");

    return newText;
}

const result = getReversalText();
console.log(result);