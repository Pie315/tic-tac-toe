

// player (factory)
// Stoes wins/losses?
function Player() {

    let prompt = ("Enter ").concat(String(playerNum), " player name:");
    const name =  window.prompt(prompt);
    this.name = name
    
    prompt = ("Enter mark for " ).concat(String(name));
    this.mark = window.prompt(prompt);

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


// game (Module?)
// runs game determines a win/loss
const game = (function() {
    let player = 1

    const flipPlayer = function() {
        console.log("called")
        if (player === 0){
            player = 1;
        } else {
            player = 0
        }
    }

    const checkForWin = function() {
        const board = boardModule.grid;
        console.log(board)
    }

    // checks if game is won and returns winner
    const checkGameState = function(square) {
        
        const board = boardModule.grid;
        const tile = board[Number(square.id)];
        let open = true;

        if ((tile === playerOne.mark) || ((tile === playerTwo.mark))) {
            open = false;
        } else {
            open = true;
            console.log(tile)
        }


        if (open) {
            game.flipPlayer()
            if (player === 0) {
                boardModule.changeGrid(square.id, playerOne.mark);
            } else if (player === 1) {
                boardModule.changeGrid(square.id, playerTwo.mark)
            } else {
                console.log("game over")
            }
        }

        checkForWin()

        return player
    };

    return{
        checkGameState,
        flipPlayer,
        
    }

})();

// This is where main starts ?




// runs when a square is clicked
function squareClick() {
    // use "this" to reference the event
    game.checkGameState(this)

};


const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("click", squareClick);
});
