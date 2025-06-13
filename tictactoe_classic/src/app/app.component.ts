import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent],
  template: '<app-game></app-game>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TicTacToe Classic';
}
