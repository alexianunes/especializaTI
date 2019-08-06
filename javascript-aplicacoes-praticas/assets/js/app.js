/* PRÉ DEFINIDAS */
let letterSelected = 0;
let playerActive = 1;
let playerOne = {
    points: 0,
}
let playerTwo = {
    points: 0,
}

/* DOM */

let player1D = document.getElementById('player1');
let player2D = document.getElementById('player2');

let scores1D = document.getElementById('scores1');
let scores2D = document.getElementById('scores2');

let letterSelectedD = document.getElementById('letter-selected');

/* FUNÇÕES */

function changePlayer() {
    playerActive = (playerActive == 1) ? 2 : 1;

    if(playerActive == 1) {
        player1D.classList.add('active');
        player2D.classList.remove('active');
    } else {
        player2D.classList.add('active');
        player1D.classList.remove('active');
    }
}

function selectLetter(event) {
    letterSelected = Math.floor((Math.random() * 13) + 1);
    showLetter();
    changeScores();

    event = event || window.event;
    if (event.preventDefault) event.preventDefault();
    if (event.returnValue) event.returnValue();
    return false;
}

function showLetter() {
    if(letterSelected == 0) {
        letterSelectedD.style.display = 'none';
    } else {
        let src = "assets/imgs/letters/" + letterSelected + ".png";
        
        letterSelectedD.setAttribute('src', src);
        letterSelectedD.style.display = 'block';
    }
}

function changeScores() {
    if (playerActive == 1) {
        playerOne.points += letterSelected;
        scores1D.innerText = playerOne.points;
    } else {
        playerTwo.points += letterSelected;
        scores2D.innerText = playerTwo.points;
    }

    if (playerOne.points >= 21 || playerTwo.points >= 21) finishGame();
}

function finishGame () {
    if (playerOne.points <= 21 && playerOne.points > playerTwo.points){
        Swal.fire('Player 1 Campeão');
    } else if(playerTwo.points <= 21 && playerTwo.points > playerOne.points) {
        Swal.fire('Player 2 Campeão');
    } else if(playerOne.points > 21) {
        Swal.fire('Player 1 Campeão');
    } else if(playerTwo.points > 21) {
        Swal.fire('Player 2 Campeão');
    } else {
        Swal.fire('Empate');
    }

    setTimeout(resetGame, 2000);
}

function resetGame () {
    letterSelected = 0;
    playerActive = 1;

    playerOne = {
        points: 0,
    }
    playerTwo = {
        points: 0,
    }

    scores1D.innerText = 0;
    scores2D.innerText = 0; 

    showLetter();
}