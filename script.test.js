import { knightMoves, validMove } from "./script.js";

test('Knight solution', () => {
    // expect(knightMoves([0, 0], [3, 3])).toStrictEqual([[0, 0], [2, 1], [3, 3]]);
    // expect(knightMoves([0, 0], [7, 7])).toStrictEqual([[0, 0], [2, 1], [4, 2], [6, 3], [7, 5], [5, 6], [7, 7]]);
    expect(knightMoves([0, 0], [3, 3])).toBe(2);
});

test('Valid move', () => {
    expect(validMove(-1, 1)).toBe(false);
    expect(validMove(0, 0)).toBe(true);
    expect(validMove(8, 1)).toBe(false);
    expect(validMove(7, 7)).toBe(true);
});

