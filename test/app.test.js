const { add } = require('../app.js');

describe('test index', () => {
  test('add', () => {
    expect(add(1, 3)).toBe(4);
  });
});
