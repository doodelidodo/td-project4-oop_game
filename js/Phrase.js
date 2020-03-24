/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * adds letter placeholders to the display when the game starts
     * @param   phrase the phrase who the player has to guess
     */
    addPhraseToDisplay(phrase) {
        for(let i = 0; i < phrase.length; i++) {
            let phraseChar = phrase[i];
            let charLi;
            if(phraseChar === " ") {
                charLi = `<li class="space"> </li>`;
            } else {
                charLi = `<li class="hide letter ${phraseChar}">${phraseChar}</li>`;
            }
            $('#phrase ul').append(charLi);
        }
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}
