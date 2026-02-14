import { shortestPath } from "./knightmoves.js";

test('Knight solution', () => {
    // expect(knightMoves([0, 0], [3, 3])).toStrictEqual([[0, 0], [2, 1], [3, 3]]);
    // expect(knightMoves([0, 0], [7, 7])).toStrictEqual([[0, 0], [2, 1], [4, 2], [6, 3], [7, 5], [5, 6], [7, 7]]);
    expect(shortestPath([0, 0], [3, 3])).toBe(2);
});



