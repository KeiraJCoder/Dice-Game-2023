const { JSDOM } = require('jsdom');

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Dice Roll Game</title>
</head>
<body>
    <div id="game">
        <button id="rollButton">Roll Dice</button>
        <div id="result"></div>
    </div>
</body>
</html>
`;

const dom = new JSDOM(html);
const document = dom.window.document;

// Your game logic goes here
document.getElementById('rollButton').addEventListener('click', function() {
    var result = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').textContent = 'You rolled: ' + result;
});

// Simulate a button click
document.getElementById('rollButton').click();

// Log the result
console.log(document.getElementById('result').textContent);
