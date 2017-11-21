import { isInArray, compute } from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

test('it works', function(assert) {
  assert.ok(isInArray([1], 1));
});

test('compute', function (assert) {
  assert.ok(compute);
});
