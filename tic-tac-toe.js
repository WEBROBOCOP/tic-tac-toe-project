const prompt = require('prompt-sync')({sigint: true});

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let currentPlayer = 'X';

function displayBoard() {
    console.log('\n' +
        ` ${board[0]} | ${board[1]} | ${board[2]} \n` +
        '-----------\n' +
        ` ${board[3]} | ${board[4]} | ${board[5]} \n` +
        '-----------\n' +
        ` ${board[6]} | ${board[7]} | ${board[8]} \n`
    );
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let pattern of winPatterns) {
        if (board[pattern[0]] !== ' ' &&
            board[pattern[0]] === board[pattern[1]] &&
            board[pattern[1]] === board[pattern[2]]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !board.includes(' ');
}

function getMove() {
    while (true) {
        let move = prompt(`Player ${currentPlayer}, enter your move (row column): `);
        let [row, col] = move.split(' ').map(num => parseInt(num) - 1);

        if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row * 3 + col] === ' ') {
            return row * 3 + col;
        } else {
            console.log('Invalid move. Try again.');
        }
    }
}

function playGame() {
    while (true) {
        displayBoard();
        let move = getMove();
        board[move] = currentPlayer;

        if (checkWin()) {
            displayBoard();
            console.log(`Player ${currentPlayer} wins!`);
            break;
        } else if (checkDraw()) {
            displayBoard();
            console.log("It's a draw!");
            break;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    if (prompt('Play again? (y/n): ').toLowerCase() === 'y') {
        board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        currentPlayer = 'X';
        playGame();
    } else {
        console.log('Thanks for playing!');
    }
}

console.log('Welcome to Tic-Tac-Toe!');
playGame();