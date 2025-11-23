// Main game function that returns the game state and methods
function ticTacToe() {
  return {
    // Game state
    board: Array(9).fill(''),  // 3x3 game board  /* new**/
    turn: 'X',                       // Current player ('X' or 'O')
    gameActive: true,                // Whether the game is still being played
    scores: { X: 0, O: 0 },          // Score tracking for both players
    statusMsg: "Player X's turn",    // Status message displayed to players
    winningLines: [],                // Stores the winning line indices when someone wins
    // All possible winning combinations (rows, columns, diagonals)
    conditions: [
      [0,1,2], [3,4,5], [6,7,8],    /* Rows**/   
      [0,3,6], [1,4,7], [2,5,8],    /* Columns**/     
      [0,4,8], [2,4,6]              /* Diagonals**/ 
    ],

    // Handles a player's move
    makeMove(i) {
      // Ignore if cell is already taken or game is over
      if (this.board[i] !== '' || !this.gameActive) return;
      
      // Place the current player's mark on the board
      this.board[i] = this.turn;
      
      // Check if this move resulted in a win or draw
      this.checkResult();
    },

    // Checks if the current move resulted in a win or draw
    checkResult() {
      let roundWon = false;
      
      // Check all winning conditions
      for (let condition of this.conditions) {
        const [a, b, c] = condition;
        // Check if all three positions in the condition are the same and not empty
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          roundWon = true;
          this.winningLines = condition; // Store the winning line for highlighting
          break;
        }
      }

      // Handle win condition
      if (roundWon) {
        this.scores[this.turn]++;          // Increment score for winning player
        this.statusMsg = `Player ${this.turn} wins! 🎉`;  // Update status message
        this.gameActive = false;           // End the game
        return;
      }

      // Check for draw (no empty cells left)
      if (!this.board.includes('')) {
        this.statusMsg = "It's a draw! 🤝";                       
        this.gameActive = false;
        return;
      }

      // Switch to the other player's turn if game is still active
      this.turn = this.turn === 'X' ? 'O' : 'X';                  this.statusMsg = `Player ${this.turn}'s turn`;
    },

    // Resets the game board for a new round
    resetGame() {
      this.board = Array(9).fill('');  // Clear the board
      this.turn = 'X';                 // Reset to player X's turn
      this.gameActive = true;          // Reactivate the game
      this.winningLines = [];          // Clear any winning line highlights
      this.statusMsg = "Player X's turn";  // Reset status message
    }
  };
}
