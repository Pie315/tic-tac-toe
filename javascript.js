console.log("ran");

// game (Module?)
// runs game determines a win/loss

// player (factory)
// Stoes wins/losses?

// gameboard (Module)
// stores position of pieces
const boardModule = (function() {
    const squares = document.querySelectorAll(".square");
    const hello = "hello world";
    let times = 0;
    let grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    const counter = () => {
        console.log("This has been run", times, "times."); // this is printed to the console
        times += 1;
        return "hello"; // this is returned as a value
    };

    return {
        hello,
        counter,
    };
})();
