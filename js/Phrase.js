/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * adds letter placeholders to the display when the game starts
     */
    addPhraseToDisplay() {
        for(let i = 0; i < this.phrase.length; i++) {
            let phraseChar = this.phrase[i];
            let charLi;
            if(phraseChar === " ") {
                charLi = `<li class="space"> </li>`;
            } else {
                charLi = `<li class="hide letter ${phraseChar}">${phraseChar}</li>`;
            }
            $('#phrase ul').append(charLi);
        }
    }
    /**
     *  checks to see if the letter selected by the player matches a letter in the phrase.
     * @param   letter a char which the player guessed
     * @return  boolean
     */
    checkLetter(letter) {
        return this.phrase.indexOf(letter) >= 0;
    }

    /**
     *  reveals the letter(s) on the board that matches the player's selection
     * @param   letter a char which the player guessed
     */
    showMatchedLetter(letter) {
        if(this.checkLetter(letter)) {
            const $letters = $("." + letter);
            $letters.removeClass("hide");
            $letters.addClass("show");
        }
    }
}
