/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("There is no place like home"),
            new Phrase("Live long and prosper"),
            new Phrase("Stay the fuck home"),
            new Phrase("May the force be with you"),
            new Phrase("Stay at home")
        ];
        this.activePhrase = null;
    }

    /**
     * Starts the game
     * removes the Start section
     * sets an active phrase
     * add it to the display
     */
    startGame() {
        $("#overlay").hide();
        this.activePhrase = this.getRandomPhrase;
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * chooses randomly a phrase from this.phrases
     */
    get getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*5)];
    }

    /**
     * checks to see if the button clicked by the player matches a letter in the phrase
     * directs the game based on a correct or incorrect guess
     * @param letter the letter the user enters
     */
    handleInteraction(letter) {
        let $letterButton = $("#qwerty button:contains(" + letter + ")");
        $letterButton.attr("disabled", "disabled");
        if(this.activePhrase.phrase.indexOf(letter) === -1) {
            $letterButton.addClass("wrong");
            this.removeLive();
        } else {
            $letterButton.addClass("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
               this.gameOver("won");
            }
        }
    }

    /**
     * remove lives and count up this.missed
     */
    removeLive() {
        if(this.missed < 4) {
            $(".tries img").eq(this.missed).attr("src", "images/lostHeart.png");
            this.missed ++;
        } else {
            this.gameOver("gameOver");
        }

    }

    /**
     * checks if all letters are guessed correct, if yes call gameOver
     */
    checkForWin() {
        const $letters = $("#phrase li");
        let hideCount = 0;

        $letters.each((index, letter) => {
            if($(letter).hasClass("hide")) {
                hideCount++;
            }
        });

        return hideCount === 0;
    }

    /**
     * Ends the game either the player has won or lost all his hearts
     * @param status status is won or gameOver
     */
    gameOver(status) {
        const $overlay = $("#overlay");
        $overlay.show();
        const $message = $("#game-over-message");
        $overlay.removeClass("start");

        if(status === "won") {
            $message.text("Nice one, you WON!!");
            $overlay.addClass("win");
        } else {
            $message.text("You lose :( - no problem try it again!");
            $overlay.addClass("lose");
        }
    }
}
