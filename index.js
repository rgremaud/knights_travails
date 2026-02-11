export function knightMoves(start, end) {
  // set initial values
  const traversal = [start];
  let position = start;

  // build a loop until position === end
  while (position !== end) {
    // determine all possible moves and build queue
    let posMoves = possibleMoves(position);
    let queue = buildQueue(position, posMoves);

    // determine next position and store value by finding closest position
    // returns a single coordinate
    let nextPos = closestPoint(end, queue);

    // add value to traversal
    traversal.push(nextPos);

    // update current position to nextPos
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

export function closestPoint(targetPos, queue) {
  // take queue, and target position and which queue location is closest to targetPos
  // distance between two points:
  // d = square root (x2 - x1)^2 + (y2 - y1)^2
  let newPos = queue[0];

  queue.forEach((location) => {
    // calculate distance between location and target
    const locDistance = distance(location, targetPos);
    // if distance is shorter than current newPos then reassign newPos to shorter distance
    if (locDistance < distance(newPos, targetPos)) {
      newPos = location;
    }
  });

  return newPos;
}

export function distance(pos1, pos2) {
  const distance = Math.sqrt(
    (pos2[0] - pos1[0]) ** 2 + (pos2[1] - pos1[1]) ** 2,
  );

  return Math.abs(distance);
}
