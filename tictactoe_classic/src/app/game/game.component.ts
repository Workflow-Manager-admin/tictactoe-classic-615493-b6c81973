import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  // Game board represented as a 2D array
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  currentPlayer: 'X' | 'O' = 'X';  // X starts the game
  gameStatus: 'ongoing' | 'win' | 'draw' = 'ongoing';
  winner: string | null = null;

  // PUBLIC_INTERFACE
  /**
   * Handles a cell click event
   * @param row Row index of the clicked cell
   * @param col Column index of the clicked cell
   */
  makeMove(row: number, col: number): void {
    // Ignore clicks if cell is already filled or game is over
    if (this.board[row][col] || this.gameStatus !== 'ongoing') {
      return;
    }

    // Make the move
    this.board[row][col] = this.currentPlayer;

    // Check for win or draw
    if (this.checkWin()) {
      this.gameStatus = 'win';
      this.winner = this.currentPlayer;
    } else if (this.checkDraw()) {
      this.gameStatus = 'draw';
    } else {
      // Switch players
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  // PUBLIC_INTERFACE
  /**
   * Resets the game to initial state
   */
  resetGame(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.gameStatus = 'ongoing';
    this.winner = null;
  }

  /**
   * Checks if the current player has won
   */
  private checkWin(): boolean {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.currentPlayer && 
          this.board[i][1] === this.currentPlayer && 
          this.board[i][2] === this.currentPlayer) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] === this.currentPlayer && 
          this.board[1][i] === this.currentPlayer && 
          this.board[2][i] === this.currentPlayer) {
        return true;
      }
    }

    // Check diagonals
    if (this.board[0][0] === this.currentPlayer && 
        this.board[1][1] === this.currentPlayer && 
        this.board[2][2] === this.currentPlayer) {
      return true;
    }
    if (this.board[0][2] === this.currentPlayer && 
        this.board[1][1] === this.currentPlayer && 
        this.board[2][0] === this.currentPlayer) {
      return true;
    }

    return false;
  }

  /**
   * Checks if the game is a draw
   */
  private checkDraw(): boolean {
    return this.board.every(row => row.every(cell => cell !== ''));
  }
}
