const winCheck = require('./functions');

it('should return 1 on (x x x) in top row', () => {
    expect(winCheck([[1, 1, 1], [0, 0, 0], [0, 0, 0]])).toBe(1);
})
it('should return 2 on (0 0 0) in top row', () => {
    expect(winCheck([[2, 2, 2], [0, 0, 0], [0, 0, 0]])).toBe(2);
})