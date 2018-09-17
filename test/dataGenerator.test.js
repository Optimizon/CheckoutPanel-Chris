const helper = require('../database/helpers/dataGenerator.js');

test('sample test', () => {
  const testObj = helper.generateRandomData(1);
  expect(typeof testObj.name).toBe('string');
});
