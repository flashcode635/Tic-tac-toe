class TicTacToe {
  constructor() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
    this.statusElement = document.getElementById('status');
    this.boardElement = document.getElementById('board');
    this.resetButton = document.getElementById('reset-btn');
    
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    this.initializeGame();
  }
  
  initializeGame() {
    this.boardElement.addEventListener('click', this.handleCellClick.bind(this));
    this.resetButton.addEventListener('click', this.resetGame.bind(this));
    this.updateStatus(`Player ${this.currentPlayer}'s turn`);
  }
  
  handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    
    if (this.board[clickedCellIndex] !== '' || !this.gameActive) {
      return;
    }
    
    this.makeMove(clickedCellIndex, clickedCell);
  }
  
  makeMove(index, cellElement) {
    this.board[index] = this.currentPlayer;
    cellElement.textContent = this.currentPlayer;
    cellElement.classList.add(this.currentPlayer.toLowerCase());
    
    this.checkResult();
  }
  
  checkResult() {
    let roundWon = false;
    let winningCombination = null;
    
    for (let i = 0; i < this.winningConditions.length; i++) {
      const [a, b, c] = this.winningConditions[i];
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        roundWon = true;
        winningCombination = this.winningConditions[i];
        break;
      }
    }
    
    if (roundWon) {
      this.updateStatus(`Player ${this.currentPlayer} wins! 🎉`);
      this.gameActive = false;
      this.highlightWinningCells(winningCombination);
      return;
    }
    
    if (!this.board.includes('')) {
      this.updateStatus("It's a draw! 🤝");
      this.gameActive = false;
      return;
    }
    
    this.switchPlayer();
  }
  
  highlightWinningCells(winningCombination) {
    winningCombination.forEach(index => {
      const cell = document.querySelector(`[data-index="${index}"]`);
      cell.classList.add('winner');
    });
  }
  
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateStatus(`Player ${this.currentPlayer}'s turn`);
  }
  
  updateStatus(message) {
    this.statusElement.textContent = message;
  }
  
  resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
    this.updateStatus(`Player ${this.currentPlayer}'s turn`);
    
    document.querySelectorAll('.cell').forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('x', 'o', 'winner');
    });
  }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
  new TicTacToe();
});

