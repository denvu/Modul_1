'use strict';

(() => {
  // eslint-disable-next-line require-jsdoc
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const game = () => {
    const balls = {
      playerBalls: 5,
      botBalls: 5,
    };

    return function start() {
      // eslint-disable-next-line require-jsdoc
      function replayGame() {
        const answer = confirm('Хотите сыграть еще?');
        if (answer === true) {
          balls.playerBalls = 5;
          balls.botBalls = 5;
          start();
        } else {
          alert('Игра окончена!');
          return;
        }
      }

      // Выбор 1 хода.
      // eslint-disable-next-line require-jsdoc
      function chooseFirstMove() {
        const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
        const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * FIGURES_RUS.length);
        const computerСhoice = FIGURES_RUS[getRandomIntInclusive()];
        const userChoice = prompt('Введите: ' + FIGURES_RUS);
        const matchedUserChoice = FIGURES_RUS.filter(figure => figure.startsWith(userChoice));

        if (userChoice === null) {
          const answer = confirm('Начать игру?');
          if (answer === true) {
            chooseFirstMove();
          } else {
            alert('Игра окончена!');
            return;
          }
        } else {
          if (matchedUserChoice.length > 0) {
            const userChoiceStr = matchedUserChoice.join(' ');
            console.log(userChoiceStr + '||' + computerСhoice);

            if (userChoiceStr === computerСhoice) {
              alert('Ничья!');
              chooseFirstMove();
            } else if (
              (userChoiceStr === 'камень' && computerСhoice === 'ножницы') ||
          (userChoiceStr === 'бумага' && computerСhoice === 'камень') ||
          (userChoiceStr === 'ножницы' && computerСhoice === 'бумага')
            ) {
            // eslint-disable-next-line max-len, no-useless-concat
              alert('Вы ходите первым.');
              goPlayersMove();
            } else {
            // eslint-disable-next-line max-len, no-useless-concat
              alert('Компьютер ходит первым');
              goBotMove();
            }
          }
        }
      }
      chooseFirstMove();

      // Игрок ходит.
      // eslint-disable-next-line require-jsdoc
      function goPlayersMove() {
        const playerEntersNumber =
        prompt(`Введите число от 1 до ${balls.playerBalls}`);

        const botNumberValue = getRandomIntInclusive(1, balls.playerBalls);

        console.log('Бот ходит: ' + botNumberValue);
        console.log(balls);

        if (playerEntersNumber === Object) {
          return;
        } else {
          const parsedPlayerEntersNumber = parseInt(playerEntersNumber);

          if (
            (parsedPlayerEntersNumber > balls.playerBalls) ||
            (parsedPlayerEntersNumber < 1)
          ) {
            alert(`Еще раз введите число от 1 до ${balls.playerBalls}`);
            goPlayersMove();
          } else {
            if (
              (parsedPlayerEntersNumber % 2 === 0 && botNumberValue % 2 === 0) ||
              (parsedPlayerEntersNumber % 2 !== 0 && botNumberValue % 2 !== 0)
            ) {
              balls.playerBalls -= parsedPlayerEntersNumber;
              balls.botBalls += parsedPlayerEntersNumber;
            } else {
              balls.playerBalls += parsedPlayerEntersNumber;
              balls.botBalls -= parsedPlayerEntersNumber;
            }
          }
        }
        if (balls.playerBalls > 0 && balls.botBalls > 0) {
          goBotMove();
        } else {
          if (balls.playerBalls <= 0) {
            alert('Вы проиграли!');
            replayGame();
          }
          if (balls.botBalls <= 0) {
            alert('Вы выиграли!');
            replayGame();
          }
        }
      }

      // Компьютер ходит.
      // eslint-disable-next-line require-jsdoc
      function goBotMove() {
        const botNumberValue = getRandomIntInclusive(1, balls.botBalls);
        console.log('Бот ходит: ' + botNumberValue);
        const playerEntersNumber = confirm('Число четное?');

        console.log(botNumberValue);
        console.log(balls);

        if ((playerEntersNumber === true && botNumberValue % 2 === 0) ||
        (playerEntersNumber === false && botNumberValue % 2 !== 0)) {
          balls.playerBalls += botNumberValue;
          balls.botBalls -= botNumberValue;
        } else {
          balls.playerBalls -= botNumberValue;
          balls.botBalls += botNumberValue;
        }
        if (balls.playerBalls > 0 && balls.botBalls > 0) {
          goPlayersMove();
        } else {
          if (balls.playerBalls <= 0) {
            alert('Вы проиграли!');
            replayGame();
          }
          if (balls.botBalls <= 0) {
            alert('Вы выиграли!');
            replayGame();
          }
        }
      }
    };
  };

  window.marbles = game;
})();
