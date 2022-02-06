/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

        /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let phraseArr = [...this.phrase];
        const ul = document.querySelector('#phrase ul');
        
        phraseArr.forEach(letter => {
            const li = document.createElement('li');
            if(letter !== ' ') {
                li.classList.add('hide');
                li.classList.add('letter');
                li.classList.add(`${letter}`);
                li.textContent = `${letter}`;
                ul.append(li)          
            } else {
                li.classList.add('space');
                ul.append(li) 
            }

            
        })
    };

     /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
      checkLetter(letter) {
       return this.phrase.includes(letter);
      }

      /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const keyboardLetters = document.querySelectorAll('.hide');
        //for loop that will check to see if the user selected letter matches, if true it will reveal letter on the board
        for(let i = 0; i < keyboardLetters.length; i++) {
            if(keyboardLetters[i].textContent === letter) {
                keyboardLetters[i].classList.add('show');
                keyboardLetters[i].classList.remove('hide');
            }
        }
    };

    
};