document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('saveButton');
    const loadButton = document.getElementById('loadButton');
    const gameStateElement = document.getElementById('state');

    saveButton.addEventListener('click', function() {
        localStorage.setItem('gameState', 'Saved');
        gameStateElement.textContent = 'Saved';
    });

    loadButton.addEventListener('click', function() {
        const savedState = localStorage.getItem('gameState');
        if (savedState) {
            gameStateElement.textContent = savedState;
        } else {
            gameStateElement.textContent = 'No Saved Game';
        }
    });
});
