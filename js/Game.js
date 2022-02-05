/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
       this.missed = 0;
       this.phrases = [new Phrase('Michael Jackson'),
                       new Phrase('The Weeknd'),
                       new Phrase('Three Six Mafia'),
                       new Phrase('Nipsey Hussle'),
                       new Phrase('Panic at the disco'),
                       new Phrase('The Notorious BIG'),
                       new Phrase('Pastor Troy'),
                       new Phrase('Master P'),
                       new Phrase('Kendrick Lamar'),]; 
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
        overlayDiv.style.visibility = 'hidden';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const lettersLeft = document.querySelectorAll('.hide');
        return (!lettersLeft.length);
    };

        /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
         let tries = document.querySelectorAll('#scoreboard img');
        
        if(this.missed <= 3) {
            tries[this.missed].src = 'images/lostHeart.png';
            this.missed++
        } else if(this.missed > 3) {
            this.gameOver(false);
        }
    };

        /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlayDiv = document.querySelector('#overlay')
        overlayDiv.style.visibility = 'visible';
        const currentDivClass = overlayDiv.classList;

        if(gameWon === true) {
            overlayDiv.childNodes[3].textContent = 'YOU WON!!!!'
            overlayDiv.childNodes[5].textContent = 'Play Again!'
            overlayDiv.classList.replace(currentDivClass, 'win')
        } else if (gameWon === false) {
            overlayDiv.childNodes[3].textContent = 'Sorry, you lost'
            overlayDiv.childNodes[5].textContent = 'Play Again!'
            overlayDiv.classList.replace(currentDivClass, 'lose')
        }
     };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const activePhrase = game.activePhrase

        if(activePhrase.checkLetter(button.textContent)) {
            activePhrase.showMatchedLetter(button.textContent)
        } else {
            game.removeLife()
        }

        if(game.checkForWin()) {
            game.gameOver(true)
        } 

        };

    };