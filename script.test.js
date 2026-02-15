import { knightMoves } from "./knightmoves.js";

test("Knight moves", () => {
  expect(knightMoves([3, 3], [4, 3])).toEqual([
    3,
    [
      [4, 3],
      [6, 4],
      [5, 2],
      [3, 3],
    ],
  ]);
});
