class Coordinate {
  constructor(x, y, moves, previous=null) {
    this.x = x;
    this.y = y;
    this.moves = moves;
    this.previous = previous;
  }
}

export function knightMoves(start, end) {
  // define possible moves
  const moveX = [2, 2, 1, 1, -1, -1, -2, -2];
  const moveY = [1, -1, 2, -1, 2, -2, 1, -1];

  // define queue
  const queue = [];

  // add starting position to queue
  queue.push(new Coordinate(start[0], start[1], 0))

  // set temporary variables for traversal
  let temp;
  let x;
  let y;

  // set up visited array and update knight start position
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  visited[start[0]][start[1]] = true;

  // loop locations until queue is empty
  while ( queue.length > 0 ) { 
    // pop first item from queue
    temp = queue.shift();

    // check if current coordinate is target
    if (temp.x === end[0] && temp.y === end[1]) {
      // build a list of all the previous nodes
      // const path = [];
      // while (temp.previous !== null) {
      //   path.push([temp.previous.x, temp.previous.y]);
      // }
      return temp;
    }

    // explore all reachable locations
    for ( let i = 0; i <= 7; i++) {
      x = temp.x + moveX[i];
      y = temp.y + moveY[i];

      // test if coordinate is on board and not visited
      if (validMove(x, y) && !visited[x][y]) {
        visited[x][y] = true;
        queue.push( new Coordinate(x, y, temp.moves + 1, temp) )
      }
    }
  }
  return "Something went wrong";
}

export function validMove(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

console.log(knightMoves([0, 0], [3, 3]));



