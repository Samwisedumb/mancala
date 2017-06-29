import { Component } from '@angular/core';

import { MancalaBoard } from './mancala-board'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board: MancalaBoard = new MancalaBoard();
}
