export class Coordinate {
  constructor(x, y, moves, previous = null) {
    this.x = x;
    this.y = y;
    this.moves = moves;
    this.previous = previous;
  }
}
