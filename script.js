let s0 = document.querySelector('.player--0');
let s1 = document.querySelector('.player--1');
let diceImg = document.querySelector('.dice');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let newGame = document.querySelector('.btn--new');
let hold = document.querySelector('.btn--hold');
let rollDice = document.querySelector('.btn--roll');

let randomImg = function (ran) {
    switch (ran) {
        case 1:
            diceImg.src = './dice-1.png';
            break;
        case 2:
            diceImg.src = './dice-2.png';
            break;
        case 3:
            diceImg.src = './dice-3.png';
            break;
        case 4:
            diceImg.src = './dice-4.png';
            break;
        case 5:
            diceImg.src = './dice-5.png';
            break;
        case 6:
            diceImg.src = './dice-6.png';
            break;
    }
}

let total = 0;
let section0Removal = function () {
    s0.classList.remove('player--active');
    currentScore0.textContent = 0;
    total = 0;
    s1.classList.add('player--active');
};
let section1Removal = function () {
    s1.classList.remove('player--active');
    currentScore1.textContent = 0;
    total = 0;
    s0.classList.add('player--active');
}

//-----------------roll event
score0.textContent = 0;
score1.textContent = 0;
rollDice.addEventListener('click', function () {
    console.log('clicked');
    let random = Math.trunc((Math.random() * 6) + 1);
    randomImg(random);
    if (s0.classList.contains('player--active')) {
        if (random !== 1) {
            total += random;
            currentScore0.textContent = total;
        } else if (random === 1) {
            section0Removal()
        }
    } else if (s1.classList.contains('player--active')) {
        if (random !== 1) {
            total += random;
            currentScore1.textContent = total;
           
        } else if (random === 1) {
            section1Removal()
        }
    }
    //HOlD Event
    
    //tried another code to switch the player active class on sections
    //example
    // if (s1.classList.contains('player--active')&& (random !==1)) {
    //      total += random;
    //     currentScore1.textContent = total;
    //     console.log(total);
    // } else if (random === 1) {
    //     s1.classList.remove('player--active');
    //     currentScore1.textContent = 0;
    //     s0.classList.add('player--active')
    // }
    // if (s0.classList.contains('player--active')) {
    //     if (!random == 1) {
    //         console.log(random);
    //         let total = 0;
    //         console.log(total)
    //         currentScore.textContent = total;
    //     }
    //     else {
    //         currentScore.textContent = '';
    //         s0.classList.contains('.player--active');
    //     }
    // }
    // if (s1.classList.contains('player--active')) {
    //     if (!random === 1) {
    //         let total = 0;
    //         total += random;
    //         currentScore.textContent = total;
    //     } else {
    //         currentScore.textContent = '';
    //         s1.classList.contains('.player--active');
    //     }
    // }
});
hold.addEventListener('click', function () {
    if (s0.classList.contains('player--active')) {
        let sum = currentScore0.textContent;
        score0.innerHTML += sum;
        section0Removal();
    } else if (s1.classList.contains('player--active')) {
        
        score1.textContent += currentScore1.textContent;
        section1Removal();
    }
})

