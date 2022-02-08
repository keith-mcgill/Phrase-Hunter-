


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
    key.disabled = true;
})
}
