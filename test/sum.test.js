const sum = require('./sum');

test('adds a post to state', () => {
  expect(postReducer(, {id: "SDSD", f: "SDS"})).toBe({SDSD: {id: "SDSD", f: "SDS"}});
});