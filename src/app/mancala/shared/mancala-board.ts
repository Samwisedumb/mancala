import { Player } from "./players";
import { MancalaLocation } from "./mancala-location"

export class MancalaBoard {
  private mancalas: {[key: number]: number};
  private holes: {[key: number]: number[]};

  constructor(private width: number, private startSeeds: number) {
    this.mancalas = {};
    this.holes = {};

    [Player.FIRST, Player.SECOND].forEach(player => {
      this.holes[player] = Array(width).fill(startSeeds);
      this.mancalas[player] = 0;
    });
  }

  public sow(seeds: number, loc: MancalaLocation): number {
    if (loc.hole === -1) {
      this.mancalas[loc.player] += 1;
    }
    else {
      this.holes[loc.player][loc.hole] += 1;
    }
    return seeds - 1;
  }

  public getSeeds(loc: MancalaLocation): number {
    return this.holes[loc.player][loc.hole];
  }
  public setSeeds(seeds: number, loc: MancalaLocation): void {
    this.holes[loc.player][loc.hole] = seeds;
  }

  public getMancala(player: Player): number {
    return this.mancalas[player];
  }

  public nextHole(currentPlayer: Player, loc: MancalaLocation): MancalaLocation {
    if (loc.player === 0) {
      if (loc.hole === this.width - 1 && currentPlayer === loc.player) { // end of Player.FIRST's row
        loc.hole = -1;
      }
      else if (loc.hole === -1 || (loc.hole === this.width - 1 && currentPlayer !== loc.player)) { // Player.First mancala
        loc.player = 1;
        loc.hole = this.width -1;
      }
      else {
        loc.hole += 1;
      }
    }
    else {
      if (loc.hole === 0 && currentPlayer === loc.player) { // end of Player.SECOND's row
        loc.hole = -1;
      }
      else if (loc.hole === -1 || (loc.hole === 0 && currentPlayer !== loc.player)) { // Player.Second mancala
        loc.player = 0;
        loc.hole = 0;
      }
      else {
        loc.hole -= 1;
      }
    }

    return loc;
  }
}
