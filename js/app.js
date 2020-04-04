/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const $qwertyButton = $("#qwerty button");
let keysClicked = [];


/**
 * Event handler on click on the start button: resets and starts the game
 */
$("#btn__reset").on('click', e => {
    resetGame();
    game = new Game();
    game.startGame();
});

/**
 * Event handler on click on the onscreen keyboard
 */
$qwertyButton.on('click', function() {
    let $key = $(this).text();
    if(!(keysClicked.includes($key))) {
        game.handleInteraction($key);
        keysClicked.push($key);
    }
});

/**
 * Event handler for keydown on the keyboard
 */
$(window).on('keydown', (e) => {
    if(game) {
        if (!(keysClicked.includes(e.key))) {
            game.handleInteraction(e.key);
            keysClicked.push(e.key);
        }
    }
});

/**
 * function resets the game, so a new one can get started
 */
function resetGame() {
    $("#phrase li").remove();
    $qwertyButton
        .removeAttr("disabled")
        .removeClass("chosen")
        .removeClass("wrong")
        .addClass("key");
    $(".tries img").attr("src", "images/liveHeart.png");
    keysClicked = [];
}







