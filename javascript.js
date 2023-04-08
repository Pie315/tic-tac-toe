

// runs when a square is clicked
function squareClick() {
    // use "this" to reference the event
    console.log(this.id);
};


const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("click", squareClick);
});


// game (Module?)
// runs game determines a win/loss
const game = (function() {
        
    // checks if game is won and returns winner
    const checkGameState = function() {

    };

    return{
        checkGameState,
    }

})();

// player (factory)
// Stoes wins/losses?
function player(name, icon) {
    let wins = 0;
    this.name = name;
    this.icon = icon;

    return this;
}

// gameboard (Module)
// stores position of pieces
const boardModule = (function() {
    let grid = [null, null, null, null, null, null, null, null, null];

    // private (should start with "_")
    const updateGrid = () => {
        const content = document.querySelectorAll(".content");
        for (let i = 0; i < grid.length; i += 1) {
            content[i].textContent = grid[i];
        }
    };

    // postions start at 0-8
    const changeGrid = (position, value) => {
        grid[position] = value;
        updateGrid();
    }

    const resetGrid = () => {
        grid = [null, null, null, null, null, null, null, null, null];
        updateGrid();
    }

    const number = () => {
        grid = [0,1,2,3,4,5,6,7,8];
        updateGrid();
    }

    return {
        resetGrid,
        changeGrid,
        number,
        grid
    };
})();


// This is where main starts ?

