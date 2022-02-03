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

    
};