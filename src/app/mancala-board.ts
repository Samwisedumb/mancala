export class MancalaLocation {
  constructor(public player: number, public hole: number) { };
}

export class MancalaBoard {
  private width: number = 6;
  mancalas: number[] = [0, 0];
  holes: number[][] = [Array(6).fill(4), Array(6).fill(4)];

  currentPlayer: 0 | 1;

  /**
  * Preforms a valid mancala move, returning false if the move failed
  * @param player  The index of the moving player
  * @param holeIndex  The index of the hole to move
  * @returns  true if the move was valid, false if otherwise
  */
  move(player: number, hole: number): boolean {
    let loc = new MancalaLocation(player, hole);

    if (!this.validateMove(loc)) {
      return false;
    }

    this.harvestAndSow(loc);
    this.nextTurn();

    return true;
  }

  private validateMove(loc: MancalaLocation): boolean {
    return true;
    //return loc.player === this.currentPlayer && this.holes[loc.player][loc.hole] > 0;
  }

  private harvestAndSow(loc: MancalaLocation): void {
    let seeds = this.holes[loc.player][loc.hole];
    this.holes[loc.player][loc.hole] = 0;

    while (seeds > 0) {
      seeds = this.sow(seeds, this.nextHole(loc));
    }
  }

  private sow(seeds: number, loc: MancalaLocation): number {
    if (loc.hole === -1) {
      this.mancalas[loc.player] += 1;
    }
    else {
      this.holes[loc.player][loc.hole] += 1;
    }
    return seeds - 1;
  }

  private nextHole(loc: MancalaLocation): MancalaLocation {
    if (loc.player === 0) {
      if (loc.hole === this.width - 1) { // end of player 0's row
        loc.hole = -1;
      }
      else if (loc.hole === -1) { // player 0 mancala
        loc.player = 1;
        loc.hole = this.width -1;
      }
      else {
        loc.hole += 1;
      }
    }
    else {
      if (loc.hole === -1) { // player 1 mancala
        loc.player = 0;
        loc.hole = 0;
      }
      else {
        loc.hole -= 1;
      }
    }

    return loc;
  }

  private nextTurn(): void {
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
  }
}
