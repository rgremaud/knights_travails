import { knightMoves } from "./index.js";

test('Knight move', () => {
  expect(knightMoves([0,0],[3,3])).toEqual([[0,0],[2,1],[3,3]]);
});