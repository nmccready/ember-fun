import { isInArray, compute } from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Utility | is in array');

test('it works', function(assert) {
  assert.ok(isInArray([1], 1), 'basic');

  const Type = Ember.Object.extend({
    item: 6,
    list: [1,2,3],
    isItemInList: compute('item', 'list')
  });
  const obj = Type.create();
  
  assert.notOk(obj.get('isItemInList'), 'initial list without an item');

  obj.get('list').addObject(6);
  
  assert.ok(obj.get('isItemInList'), 'list modified with the item');

  obj.set('item', 52);

  assert.notOk(obj.get('isItemInList'), 'modified item to not be there');
});

test('compute', function (assert) {
  assert.ok(compute);
});
