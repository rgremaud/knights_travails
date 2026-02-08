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
    // set a track for all visited notes
    const visited = [];

    // determine all possible moves
    const posMoves = possibleMoves(start);

    // set array for moves made
    const visitedLocations = [];

    // set start position
    let position = start;

    // test which moves are possible;

    const answer = [[0,0],[2,1],[3,3]]
    return answer
}

export function possibleMoves(start) { 
    // const evenNumbersArrow = numbers.filter(number => number % 2 === 0);
    const moves = [[2, 1], [2, -1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]];

    // filter out any moves where start[0] + move[0] is less than 0 or greater than 7
    // filter out any moves where start[1] + move[1] is less than 0 or greater than 7
    const posMoves = moves.filter(move => move[0] + start[0] > 0 && move[0] + start[0] <= 7 && 
                                        move[1] + start[1] > 0 && move[1] + start[1] <= 7 );

    return posMoves;
}