const winCheck = require('./functions');

it('should return 1 on (x x x) in top row', () => {
    expect(winCheck([[1, 1, 1], [0, 0, 0], [0, 0, 0]])).toBe(1);
})
it('should return 2 on (o o o) in top row', () => {
    expect(winCheck([[2, 2, 2], [0, 0, 0], [0, 0, 0]])).toBe(2);
})
it("should return 0 if no rows/columns/diagonals contain 3 1's or 2's in a row", () => {
    expect(winCheck([[1, 1, 2], [2, 2, 1], [1, 2, 1]])).toBe(0);
})
it('should return 2 on (o o o) in mid row', () => {
    expect(winCheck([[0, 1, 0], [2, 2, 2], [0, 1, 0]])).toBe(2);
})
it('should return 1 on (x x x) in bottom row', () => {
    expect(winCheck([[0, 2, 1], [2, 2, 0], [1, 1, 1]])).toBe(1);
})