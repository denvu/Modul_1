'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  // eslint-disable-next-line max-len
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * FIGURES_RUS.length);

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const computerСhoice = FIGURES_RUS[getRandomIntInclusive()];
      const userChoice = prompt('Введите: ' + FIGURES_RUS);
      // eslint-disable-next-line max-len
      const matchedUserChoice = FIGURES_RUS.filter(figure => figure.startsWith(userChoice));

      if (userChoice === null) {
        const answer = confirm('Еще?');
        if (answer === true) {
          start();
        } else {
          // eslint-disable-next-line max-len, no-useless-concat
          alert('Результат:' + '\n' + 'Компьютер: ' + result.computer + '\n' + 'Игрок: ' + result.player);
          return;
        }
      } else {
        if (matchedUserChoice.length > 0) {
          const userChoiceStr = matchedUserChoice.join(' ');
          console.log(userChoiceStr + '||' + computerСhoice);

          if (userChoiceStr === computerСhoice) {
          // eslint-disable-next-line max-len, no-useless-concat
            alert('Компьютер: ' + computerСhoice + '\n' + 'Вы: ' + userChoiceStr + '\n' + 'Ничья!');
            start();
          } else if (
            (userChoiceStr === 'камень' && computerСhoice === 'ножницы') ||
        (userChoiceStr === 'бумага' && computerСhoice === 'камень') ||
        (userChoiceStr === 'ножницы' && computerСhoice === 'бумага')
          ) {
          // eslint-disable-next-line max-len, no-useless-concat
            alert('Компьютер: ' + computerСhoice + '\n' + ('Вы: ' + userChoiceStr) + '\n' + 'Вы победили!');
            result.player += 1;
            start();
          } else {
          // eslint-disable-next-line max-len, no-useless-concat
            alert('Компьютер: ' + computerСhoice + '\n' + 'Вы: ' + userChoiceStr + '\n' + 'Вы проиграли!');
            result.computer += 1;
            start();
          }
        }
      }
    };
  };

  window.RPS = game;
})();
