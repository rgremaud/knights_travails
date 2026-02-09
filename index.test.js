import { knightMoves, possibleMoves, buildQueue, closestPoint, distance } from "./index.js";

test('Knight solution', () => {
    expect(knightMoves([0, 0], [3, 3])).toEqual([[0, 0], [2, 1], [3, 3]]);
});

test('Possible moves', () => {
    expect(possibleMoves([0, 0])).toEqual([[2, 1], [1, 2]])
})

test('Build queue', () => {
    expect(buildQueue([0, 0], [[2, 1], [1, 2]])).toEqual([[2, 1], [1, 2]])
})

test('Distance check', () => {
    expect(distance([1, 1], [4, 5])).toBe(5)
})

test('Closest point', () => {
    expect(closestPoint([7, 7], [[0, 0], [3, 4], [6, 6]])).toStrictEqual([6, 6])
})