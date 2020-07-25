/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1; // rolls from 1 to 6

//Setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//Getter
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', () => {
    // 1, Random Number
    var dice = Math.floor(Math.random() * 6) + 1

    // 2. Display the Result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    //3. Update the round IF the rolled number was NOT a 1
    if (dice !== 1){    // === doesn't do type coercion && !== doesn't do type coercion
        //add score
        roundScore += dice;
        // For displaying in the UI
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{

        
        //next player
       // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        /*
        if (activePlayer === 0) {
            activePlayer = 1;
        }else{
            activePlayer = 0;
        }
        */
        /*
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //Removing the dice icon as soon as the player changes
        document.querySelector('.dice').style.display = 'none';

        */


        nextPlayer();       // Calling the function Using the DON"T REPEAT YOURSELF PROPERTY (DRY)!!!!!!!!!!!!!!      

    }

});

document.querySelector('.btn-hold').addEventListener('click', () => {

    // adding current score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player WON the GAME
    
    if (scores[activePlayer] >= 20){
    
        document.querySelector('#name-' + activePlayer ).textContent = 'You are the MVP! Winner Winner Chicken Dinner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
    }else{
        nextPlayer();
    }


    // Next Player
    nextPlayer();


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


















