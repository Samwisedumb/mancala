import { Player } from "./players";
import { MancalaLocation } from "./mancala-location";
import { MancalaBoard } from "./mancala-board";

export class Mancala {
  readonly width: number = 6;
  currentPlayer: Player = Player.FIRST;
  readonly board: MancalaBoard;

  constructor() {
    this.board = new MancalaBoard(6, 4);
  }

  /**
  * Preforms a valid mancala move, returning false if the move failed
  * @param player  The index of the moving player
  * @param holeIndex  The index of the hole to move
  * @returns  true if the move was valid, false if otherwise
  */
  public move(player: number, hole: number): boolean {
    let loc = new MancalaLocation(player, hole);

    if (!this.validateMove(loc)) {
      return false;
    }

    this.harvestAndSow(loc);

    return true;
  }

  public getPlayersSeeds(player: Player): number[] {
    let seeds: number[] = [];

    let loc = new MancalaLocation(player, 0);

    for (loc.hole = 0; loc.hole < this.width; loc.hole++) {
      seeds.push(this.board.getSeeds(loc));
    }

    return seeds;
  }

  public getValidMoves(player: Player): number[] {
    let moves: number[] = [];

    this.getPlayersSeeds(player).forEach((seeds: number, hole: number) => {
      if (seeds > 0)
        moves.push(hole);
    });

    return moves;
  }

  public getCahcedSeeds(player: Player): number {
    return this.board.getMancala(player);
  }

  private validateMove(loc: MancalaLocation): boolean {
    return loc.player === this.currentPlayer && this.board.getSeeds(loc) > 0;
  }

  private harvestAndSow(loc: MancalaLocation): void {
    let seeds = this.board.getSeeds(loc);
    this.board.setSeeds(0, loc);

    while (seeds > 0) {
      seeds = this.board.sow(seeds, this.board.nextHole(this.currentPlayer, loc));
    }

    this.nextTurn(loc);
  }

  private nextTurn(loc: MancalaLocation): void {
    const currentMoves = this.getValidMoves(this.currentPlayer);
    const nextMoves = this.getValidMoves(this.otherPlayer(this.currentPlayer));

    if (currentMoves.length === 0 && nextMoves.length === 0) {
      alert("Game Over");
    }
    else if (loc.hole === -1 && currentMoves.length > 0) {
      // keep sowing
    }
    else if (nextMoves.length > 0) {
      this.currentPlayer = this.otherPlayer(this.currentPlayer);
    }
  }

  private otherPlayer(player: Player): Player {
    return player === Player.FIRST ? Player.SECOND : Player.FIRST;
  }
}
