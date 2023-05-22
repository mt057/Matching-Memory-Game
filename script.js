document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
      {
        name: 'A',
        img: 'images/A.png'
      },
      {
        name: 'H',
        img: 'images/H.png'
      },
      {
        name: 'J',
        img: 'images/J.png'
      },
      {
        name: 'K',
        img: 'images/K.png'
      },
      {
        name: 'Q',
        img: 'images/Q.png'
      },
      {
        name: 'S',
        img: 'images/S.png'
      },
      {
        name: 'A',
        img: 'images/A.png'
      },
      {
        name: 'H',
        img: 'images/H.png'
      },
      {
        name: 'J',
        img: 'images/J.png'
      },
      {
        name: 'K',
        img: 'images/K.png'
      },
      {
        name: 'Q',
        img: 'images/Q.png'
      },
      {
        name: 'S',
        img: 'images/S.png'
      }
    ];
  
    cardArray.sort(() => 0.5 - Math.random());
  
    const grid = document.querySelector('.grid');
    const resultDisplay = document.getElementById('result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
  
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
      }
    }
  
    function flipCard() {
      const cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  
    function checkForMatch() {
      const cards = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
  
      if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have clicked the same image!');
      } else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        if (cardsWon.length === cardArray.length / 2) {
          setTimeout(() => {
            alert('Congratulations! You found them all!');
            resetGame();
          }, 500);
        }
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again');
      }
  
      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent = cardsWon.length;
    }
  
    function resetGame() {
      grid.innerHTML = '';
      cardsChosen = [];
      cardsChosenId = [];
      cardsWon = [];
      resultDisplay.textContent = '';
      createBoard();
    }
  
    createBoard();
  });
  