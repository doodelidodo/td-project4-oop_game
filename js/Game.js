/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("How are you"),
            new Phrase("Dodo is a god"),
            new Phrase("Stay the fuck home"),
            new Phrase("May the force be with you"),
            new Phrase("Stupid is as stupid does")
        ];
        this.activePhrase = null;
    }
}
