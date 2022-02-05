

/*const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());

    const hello = new Phrase('HEllo')
    console.log(hello)
  */  
    /*const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
*/

/*const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
*/

let game;
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click',() => {
    game = new Game();
    game.startGame();
});

//reference to all of the virtual keyboard keys in the DOM
const keys = document.querySelectorAll('.key')

for(const key of keys){
key.addEventListener('click', (e) => {
    game.handleInteraction(e.target)
})
}
