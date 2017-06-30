import { Component } from '@angular/core';

import { Mancala } from './shared/mancala'
import { Player } from './shared/players';

@Component({
  selector: 'mancala',
  templateUrl: './mancala.component.html',
  styleUrls: ['./mancala.component.css']
})
export class MancalaComponent {
  game = new Mancala();
  Player = Player;
}
