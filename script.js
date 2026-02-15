import { knightMoves } from "./knightmoves.js";

function printPath(knightMoves) {
  const data = knightMoves;

  console.log("You made it in " + data[0] + " moves!  Here is your path:");
  data[1].reverse().forEach((move) => {
    console.log(move);
  });
}

const moves = knightMoves([3, 3], [4, 3]);
printPath(moves);

const moves2 = knightMoves([0, 0], [7, 7]);
printPath(moves2);
