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
        game.gameReset()
        
        //hides start screen overlay
        const overlayDiv = document.querySelector('#overlay')
        overlayDiv.style.visibility = 'hidden';
        
        //sets activePhrase property to a random phrase
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
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.visibility = 'visible';
        const currentDivClass = overlayDiv.classList;

        if(gameWon === true) {
            overlayDiv.childNodes[3].textContent = 'YOU WON!!!!';
            overlayDiv.childNodes[5].textContent = 'Play Again!';
            overlayDiv.classList.replace(currentDivClass, 'win');
        } else if (gameWon === false) {
            overlayDiv.childNodes[3].textContent = 'Sorry, you lost';
            overlayDiv.childNodes[5].textContent = 'Play Again!';
            overlayDiv.classList.replace(currentDivClass, 'lose');
        }
     };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const activePhrase = game.activePhrase;

        if(activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            activePhrase.showMatchedLetter(button.textContent);
            
        } else {
            button.classList.add('wrong');
            game.removeLife();
        }

        if(game.checkForWin()) {
            game.gameOver(true);
        } 

        };

    //resets the game board so a new game can be started
    gameReset(){
        const oldPhrase = document.querySelectorAll('#phrase li');
        
        //removes all <li> elements from Phrase <ul> element
        oldPhrase.forEach(li => li.parentNode.removeChild(li));

        for(const key of keys){
            key.disabled = false;
            key.classList.remove('chosen');
            key.classList.remove('wrong')
            key.classList.add('key')
        }
        //resets all of the try hearts back to five
        let tries = document.querySelectorAll('#scoreboard img');

        for(const tri of tries) {
            tri.src = 'images/liveHeart.png';
        }


    }

    

    };