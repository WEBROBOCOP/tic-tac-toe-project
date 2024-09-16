# 🎮 Terminal-Based Tic-Tac-Toe

A classic game reimagined for the command line! This project brings the timeless Tic-Tac-Toe experience to your terminal, complete with a step-by-step visualization of the game's logic.

## 🌟 Features

- 📊 Dynamic 3x3 game board
- 🔄 Alternating turns between X and O players
- ✅ Intelligent win and draw detection
- 🔍 Step-by-step console logging for learning purposes
- 🔁 Option to play multiple games

## 🛠️ How It Works

This Tic-Tac-Toe implementation uses a 2D array to represent the game board, allowing for intuitive indexing and easy visualization. Here's a breakdown of the core components:

1. **Board Representation**: 
   ```javascript
   let gameData = [
       ["_", "_", "_"],
       ["_", "_", "_"],
       ["_", "_", "_"]
   ];
   ```
   This structure allows for easy access and modification of each cell.

2. **Win Condition Checking**:
   We use destructuring assignment to simplify win condition checks:
   ```javascript
   let [a, b, c] = gameData[0];
   let [d, e, f] = gameData[1];
   let [g, h, i] = gameData[2];
   
   if ((a === b && b === c && a !== "_") || /* other conditions */) {
       // Win detected
   }
   ```

3. **Player Turns**:
   The game alternates between X and O players using a simple toggle:
   ```javascript
   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   ```

4. **Move Validation**:
   Before applying a move, we check if it's within bounds and the cell is empty:
   ```javascript
   if (row >= 0 && row < 3 && col >= 0 && col < 3 && gameData[row][col] === "_") {
       // Valid move
   }
   ```

## 💡 The Inspiration

This project was born out of a desire to understand game logic at a deeper level. By implementing Tic-Tac-Toe from scratch, I gained insights into:

- Game state management
- Turn-based gameplay mechanics
- Win condition algorithms
- User input handling in a command-line interface

The step-by-step console logging was added to provide a clear visualization of the game's inner workings, making it an excellent learning tool for aspiring game developers.

## 🚀 Getting Started

1. Clone this repository
2. Ensure you have Node.js installed
3. Install dependencies:
   ```
   npm install prompt-sync
   ```
4. Run the game:
   ```
   node tic-tac-toe.js
   ```

## 🤝 Contributing

Feel free to fork this project, submit PRs, or suggest new features! All contributions are welcome.

## �LICENSE

This project is open source and available under the [MIT License](LICENSE).

---

Built with 💖 by David Etim
