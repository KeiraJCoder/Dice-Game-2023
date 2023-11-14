// Initialize variables to keep track of each player's total score.
// This is necessary to separately tally the scores for both players as the game progresses.
var totalP1 = 0;
var totalP2 = 0;

// A boolean variable to track whose turn it is, starting with Player 1.
// It simplifies the logic to switch turns between players.
var isPlayer1Turn = true;

// Get references to the roll button, reset button, and the dice images for both players.
// This is needed to interact with these elements based on game actions.
var rollButton = document.getElementById('rollButton');
var resetButton = document.getElementById('reset');
var diceImageP1 = document.getElementById('diceImageP1');
var diceImageP2 = document.getElementById('diceImageP2');

// Event listener for the roll dice button.
rollButton.addEventListener('click', function() {
    // Generate a random dice roll between 1 and 6.
    // This simulates the rolling of a physical dice.
    var result = Math.floor(Math.random() * 6) + 1;

    // Logic to update the dice image and score for the current player.
    if (isPlayer1Turn) {
        // Update Player 1's score.
        totalP1 += result;
        // Show Player 1's dice image and hide Player 2's.
        diceImageP1.src = 'images/dice' + result + '.png';
        diceImageP1.style.display = 'block';
        diceImageP2.style.display = 'none';
        // Update the current roll and total score display for Player 1.
        document.getElementById('currentRollP1').innerText = 'Player 1 Current Roll: ' + result;
        document.getElementById('totalP1').innerText = 'Player 1 Total: ' + totalP1;
    } else {
        // Update Player 2's score.
        totalP2 += result;
        // Show Player 2's dice image and hide Player 1's.
        diceImageP2.src = 'images/dice' + result + '.png';
        diceImageP2.style.display = 'block';
        diceImageP1.style.display = 'none';
        // Update the current roll and total score display for Player 2.
        document.getElementById('currentRollP2').innerText = 'Player 2 Current Roll: ' + result;
        document.getElementById('totalP2').innerText = 'Player 2 Total: ' + totalP2;
    }

    // Check if either player has reached or exceeded a score of 20 to end the game.
    if (totalP1 >= 20 || totalP2 >= 20) {
        // Disable the roll button and show the reset button when game ends.
        rollButton.disabled = true;
        resetButton.style.display = 'inline';
        // Show an alert indicating which player won.
        alert("Game Over! " + (isPlayer1Turn ? "Player 1" : "Player 2") + " has reached a total of 20 or more!");
    } else {
        // Switch turns if the game hasn't ended.
        isPlayer1Turn = !isPlayer1Turn;
    }
});

// Event listener for the reset button.
resetButton.addEventListener('click', function() {
    // Reset the scores for both players to 0.
    totalP1 = 0;
    totalP2 = 0;
    // Reset to Player 1's turn.
    isPlayer1Turn = true;

    // Reset the display for current roll and total for both players.
    document.getElementById('currentRollP1').innerText = 'Player 1 Current Roll: 0';
    document.getElementById('totalP1').innerText = 'Player 1 Total: 0';
    document.getElementById('currentRollP2').innerText = 'Player 2 Current Roll: 0';
    document.getElementById('totalP2').innerText = 'Player 2 Total: 0';

    // Hide the reset button and re-enable the roll button.
    // Also, hide both dice images to restart the game visuals.
    resetButton.style.display = 'none';
    rollButton.disabled = false;
    diceImageP1.style.display = 'none';
    diceImageP2.style.display = 'none';
});
