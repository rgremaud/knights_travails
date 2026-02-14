/*
New process:
Start: 0, 0
End: 5, 5

possible moves: [2, 1] [2, -1] [1, 2] [1, -2] [-2, 1] [-2, -1] [-1, 2] [-1, -2]
visited: [0, 0] [2, 1] [1, 2] || [4, 2] [4, 0] [3, 3] [0, 2] [1, 3] 

1st move: [2, 1] [1, 2]
2nd moves: [4, 2] [4, 0] [3, 3] [0, 2] [1, 3] || [3, 1] [2, 4] []

check that position is valid on the board

set up a queue of nodes to visit
and a list of visited arrays

while queue is not empty
pop out the first coordinate and explore all 8 possible knight moves
if move is a valid move and cell has not been visited yet then check if you are at target cell
otherwise mark the cell as visited and push it to the queue for further exploration

*/

class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export function knightMovesNew(start, end) {
  // define possible moves

  const movesX = [2, 2, 1, 1, -1, -1, -2, -2];
  const movesY = [1, -1, 2, -1, 2, -2, 1, -1];
  // define queue

  const queue = [];


}


export function knightMoves(start, end) {
  // set initial values
  const traversal = [start];
  let position = start;

  let posMoves = possibleMoves(position);
  let queue = buildQueue(position, posMoves);

  let nextPos = closestPoint(end, queue);

  traversal.push(nextPos);

  // try loop here?
  while (position[0] !== end[0] && position[1] !== end[1]) {
    position = nextPos;
    posMoves = possibleMoves(position);
    queue = buildQueue(position, posMoves);
    nextPos = closestPoint(end, queue)
    traversal.push(nextPos);

    position = nextPos;
  }

  return traversal;
}

export function possibleMoves(start) {
  // const evenNumbersArrow = numbers.filter(number => number % 2 === 0);
  const moves = [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-2, 1],
    [-2, -1],
    [-1, 2],
    [-1, -2],
  ];

  // filter out any moves where start[0] + move[0] is less than 0 or greater than 7
  // filter out any moves where start[1] + move[1] is less than 0 or greater than 7
  const posMoves = moves.filter(
    (move) =>
      // check x axis is above 0 and less than or equal to 7
      move[0] + start[0] >= 0 &&
      move[0] + start[0] <= 7 &&
      // check y axis is above 0 and less than or equal 7
      move[1] + start[1] >= 0 &&
      move[1] + start[1] <= 7,
  );

  return posMoves;
}

export function buildQueue(currentPos, movesArray) {
  const queue = [];
  movesArray.forEach((move) => {
    const coordinate = [move[0] + currentPos[0], move[1] + currentPos[1]]
    queue.push(coordinate);
  });

  return queue;
}



