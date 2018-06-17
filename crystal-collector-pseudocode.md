howToPlay div
   < button > 
   function { on click - show/hide the howToPlay}

function {
    random match number between 19-120
}

function {
    - random hidden number for each crystal
    - any number between 1-12
    - add numbers from crystals to "your total score"
}

if (total score === match number) {
    - display "You won" pop-up
    - add 1 to Wins total
    - reset game
} else (lost) {
    - display "You lost" pop-up
    - add 1 to Losses total
    - reset game
}

function (reset game) {
    - new random number for match number
    - new hidden numbers for each crystal
    - total score resets back to 0
    - you won/lost display disappears
}