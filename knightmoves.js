import { Coordinate } from "./coordinate.js";

export function shortestPath(start, end) {
  // define possible moves
  const moveX = [2, 2, 1, 1, -1, -1, -2, -2];
  const moveY = [1, -1, 2, -1, 2, -2, 1, -1];

  // define queue
  const queue = [];

  // add starting position to queue
  queue.push(new Coordinate(start[0], start[1], 0));

  // set temporary variables for traversal
  let temp;
  let x;
  let y;

  // set up visited array and update knight start position
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  visited[start[0]][start[1]] = true;

  // loop locations until queue is empty
  while (queue.length > 0) {
    // pop first item from queue
    temp = queue.shift();

    // check if current coordinate is target
    if (temp.x === end[0] && temp.y === end[1]) {
      return temp;
    }

    // explore all reachable locations
    for (let i = 0; i <= 7; i++) {
      x = temp.x + moveX[i];
      y = temp.y + moveY[i];

      // test if coordinate is on board and not visited
      if (validMove(x, y) && !visited[x][y]) {
        visited[x][y] = true;
        queue.push(new Coordinate(x, y, temp.moves + 1, temp));
      }
    }
  }
  return "Something went wrong";
}

function validMove(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

export function knightMoves(start, end) {
  const path = shortestPath(start, end);
  const moves = path.moves;
  const traversal = [];

  let temp = path;

  while (temp !== null) {
    traversal.push([temp.x, temp.y]);
    temp = temp.previous;
  }

  return [moves, traversal];
  //   console.log("You made it in " + moves + " moves!  Here is your path:");
  //   traversal.reverse().forEach((move) => {
  //     console.log(move)
  //   })
}
