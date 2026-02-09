/*
define board as having 0-7 along both levels for a grid w/64 total spaces
example coordinates: [x, y]

knight can move 2 steps for and 1 to either side or 1 step forward 2 to either side and face any direction
possible movies: 
[2, 1]
[2, -1]
[1, 2]
[1, -2]
[-2, 1]
[-2, -1]
[-1, 2]
[-1, -2]

example: 
start [0,0]
end [3, 3]

Queue of all possible moves: 
[0, 0] +2 +1 -> [2, 1] +1 +2 -> [3, 3] done
[0, 0] +2 -1 -> not possible
[0, 0] +1 +2 -> [1, 2] +2 +1 -> [3, 3] done
[0, 0] +1 -2 -> not possible
[0, 0] -2 +1 -> not possible
[0, 0] -2 -1 -> not possible
[0, 0] -1 +2 -> not possible
[0, 0] -1 -2 -> not possible
*/

export function knightMoves(start, end) {
    // set initial values
    const visited = [start];
    let position = start;


    // build a loop until position === end
    while (position !== end) {
        // determine all possible moves and build queue
        let posMoves = possibleMoves(position);
        let queue = buildQueue(position, posMoves);

        // determine next position and store value
        let nextPos = closestPoint(end, queue);
        visited.push(nextPos);

        // update position and clear nextPos
        position = nextPos;
        nextPos = null;
    }

    // const answer = [
    //     [0, 0],
    //     [2, 1],
    //     [3, 3],
    // ];
    return visited;
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
            move[0] + start[0] > 0 &&
            move[0] + start[0] <= 7 &&
            move[1] + start[1] > 0 &&
            move[1] + start[1] <= 7,
    );

    return posMoves;
}

export function buildQueue(currentPos, movesArray) {
    movesArray.forEach((move) => {
        move[0] + currentPos[0];
        move[1] + currentPos[1];
    });

    const queue = movesArray;

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
    })

    return newPos;
}

export function distance(pos1, pos2) {
    const distance = Math.sqrt((pos2[0] - pos1[0]) ** 2 + (pos2[1] - pos1[1]) ** 2)

    return Math.abs(distance);
}