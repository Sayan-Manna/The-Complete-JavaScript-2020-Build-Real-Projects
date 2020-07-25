/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/


var scores, roundScore, activePlayer, gamePlaying;

init()
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', () => {

    if(gamePlaying) {
        // 1, Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the Result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        

        //3. Update the round IF the rolled number was NOT a 1

        if (dice === 6 && lastDice ===6) {         // Challenge 1
            //Player looses its score
            scores[activePlayer] = 0;
            // Update the DOM
            document.querySelector('#score-' + activePlayer).textContent = 0;
            // Next Player
            nextPlayer();

        }else if (dice !== 1){    // === doesn't do type coercion && !== doesn't do type coercion
            //add score
            roundScore += dice;
            // For displaying in the UI
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{  
            // Next player
            nextPlayer();    // Calling the function Using the DON"T REPEAT YOURSELF PROPERTY (DRY)!!!!!!!!!!!!!!      
        }

        lastDice = dice; // Storing the last Dice number

    }

});

document.querySelector('.btn-hold').addEventListener('click', () => {

    if (gamePlaying) {
        // adding current score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player WON the GAME
        
        if (scores[activePlayer] >= 100){
        
            document.querySelector('#name-' + activePlayer ).textContent = 'You are the MVP!!!'
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        }else{
            nextPlayer();
        }

    }

});

function nextPlayer() {
  
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    dice = Math.floor(Math.random() * 6) + 1; // rolls from 1 to 6

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}


