import { knightMoves, possibleMoves } from "./index.js";

test('Knight solution', () => {
  expect(knightMoves([0,0],[3,3])).toEqual([[0,0],[2,1],[3,3]]);
});

test('Possible moves', () => {
    expect(possibleMoves([0,0])).toEqual([[2, 1], [1, 2]])
})
