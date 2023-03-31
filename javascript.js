console.log("ran");


// runs when a square is clicked
function squareClick() {
    console.log(this.id)
};



const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("click", squareClick);
});


// game (Module?)
// runs game determines a win/loss

// player (factory)
// Stoes wins/losses?

// gameboard (Module)
// stores position of pieces
const boardModule = (function() {
    let times = 0;
    const grid = [null, null, null, null, null, null, null, null, null];

    // private (should start with "_")
    const updateGrid = () => {
        const content = document.querySelectorAll(".content");
        for (let i = 0; i < grid.length; i += 1) {
            content[i].textContent = grid[i];
        }
    };

    // postions start at 0-8
    const changeGrid = (position, value) => {
        grid[position].textContent = value;
    }

    // sample
    const counter = () => {
        console.log("This has been run", times, "times."); // this is printed to the console
        times += 1;
        return "hello"; // this is returned as a value
    };

    return {
        counter,
        updateGrid,
        changeGrid,
    };
})();
