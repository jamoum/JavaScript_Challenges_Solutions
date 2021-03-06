const canEnterCave = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canEnterCave([[0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0]])).toEqual(true);
        expect(canEnterCave([[0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0]])).toEqual(false);
        expect(canEnterCave([[0, 1, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0]])).toEqual(true);
        expect(canEnterCave([[0, 1, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0]])).toEqual(false);
        expect(canEnterCave([[0, 1, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0]])).toEqual(false);
        expect(canEnterCave([[0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0]])).toEqual(true);
        expect(canEnterCave([[0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0]])).toEqual(false);
        expect(canEnterCave([[0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0]])).toEqual(false);
        expect(canEnterCave([[0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0]])).toEqual(true);
        expect(canEnterCave([[1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 1, 1, 1, 0, 1, 0, 1], [1, 0, 1, 0, 0, 0, 1, 0, 1], [1, 0, 1, 0, 1, 1, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 1]])).toEqual(true);
    });
});
