import { knightMoves, possibleMoves, buildQueue, closestPoint, distance } from "./index.js";

test('Knight solution', () => {
    expect(knightMoves([0, 0], [3, 3])).toStrictEqual([[0, 0], [2, 1], [3, 3]]);
    expect(knightMoves([0, 0], [7, 7])).toStrictEqual([[0, 0], [2, 1], [4, 2], [6, 3], [7, 5], [5, 6], [7, 7]]);
});

// rework tests so you're current pos is [2,1] 

test('Possible moves', () => {
    expect(possibleMoves([2, 1])).toEqual([[2, 1], [2, -1], [1, 2], [-2, 1], [-2, -1], [-1, 2]])
})

test('Build queue', () => {
    expect(buildQueue([0, 0], [[2, 1], [1, 2]])).toEqual([[2, 1], [1, 2]]);
    expect(buildQueue([2, 1], [[2, 1], [2, -1], [1, 2], [-2, 1], [-2, -1], [-1, 2]])).toEqual([[4, 2], [4, 0], [3, 3], [0, 2], [0, 0], [1, 3]]);
})

test('Distance check', () => {
    expect(distance([1, 1], [4, 5])).toBe(5)
})

test('Closest point', () => {
    expect(closestPoint([3, 3], [[1, 2], [2, 1]])).toStrictEqual([1, 2]);
    expect(closestPoint([3, 3], [[4, 2], [4, 0], [3, 3], [0, 2], [0, 0], [1, 3]])).toStrictEqual([3, 3]);
})