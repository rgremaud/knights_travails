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
    // define possible moves
    const moves = [[2, 1], [2, -1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]];
    
    // set a track for all visited notes
    const visited = [];

    // set array for moves made
    const visitedLocations = [];

    // set start position
    let position = start;

    // test which moves are possible;

    const answer = [[0,0],[2,1],[3,3]]
    return answer
}