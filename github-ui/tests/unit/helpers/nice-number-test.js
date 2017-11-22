
import { niceNumber } from 'github-ui/helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

test('no formatting', function(assert) {
  let result = niceNumber([1234]);
  
  assert.equal(result, 1234, 'no format');
});

test('formatting', function (assert) {
  let result = niceNumber([50, '0.0 a']);
  assert.equal(result, '50.0', 'not formatted');

  result = niceNumber([1234, '0.0 a']);
  assert.equal(result, '1.2 K', 'formatted K');
});

