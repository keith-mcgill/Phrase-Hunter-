/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
       this.missed = 0;
       this.phrases = [new Phrase('Programming is a joy'),
                       new Phrase('To write code is to solve problems'),
                       new Phrase('You will fail everything you do not try'),
                       new Phrase('Be tolerant with others and strict with yourself'),
                       new Phrase('Make the mind tougher by exposing it to adversity'),
                       new Phrase('Learn to be indifferent to what makes no difference'),
                       new Phrase('Man conquers the world by conquering himself'),];
       this.activePhrase = 'null';
    }

        /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        let phrase = this.phrases[randomNumber];
        
        return phrase;
    };

        /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlayDiv = document.querySelector('#overlay')
        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    };