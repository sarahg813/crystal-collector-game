//toggle hide/show the How to Play div when you click the button
$(".howToPlayButton").click(function(){
    $(".howToPlay").slideToggle();
});

var matchNum = 0;
var totalScore = 0;
var numWins = 0;
var numLosses = 0;
var keyClick;
var isFinished = false;


function setup() {
    //picks random number between two values
    var randomNum = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

    matchNum = randomNum(19, 120);
    $('#yellowGem').attr('data-val', randomNum(1, 12));
    $('#blueGem').attr('data-val', randomNum(1, 12));
    $('#purpleGem').attr('data-val', randomNum(1, 12));
    $('#pinkGem').attr('data-val', randomNum(1, 12));

    totalScore = 0;

    $('#giphy-embed').attr('src', '');

    updateScreen(); 
}

function updateScreen() {
    $('#matchNum').text(matchNum);
    $('#totalScore').text(totalScore);
    $('#numWins').text(numWins);
    $('#numLosses').text(numLosses);
}

function isWinner() {
    if (totalScore === matchNum) {
        numWins++;
        $('#giphy-embed').attr('src', 'https://giphy.com/embed/l0HlSDiA6WUytl9oA');
        isFinished = true;
    }
}

function isLoser() {
    if (totalScore > matchNum) {
        numLosses++;
        $('#giphy-embed').attr('src', 'https://giphy.com/embed/3og0IEeKFFlzaykixW');
        isFinished = true;
    }
}


$('.gemButton').on('click', function(){
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        keyClick = $(this).attr('data-val');
        console.log(keyClick);
        totalScore += parseInt(keyClick);

        updateScreen();
        isWinner();
        isLoser();
    }
  });

  
  setup();
  updateScreen();

