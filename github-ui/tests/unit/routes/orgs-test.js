import { moduleFor, test } from 'ember-qunit';
import favorites from 'github-ui/services/favorites'

moduleFor('route:orgs', 'Unit | Route | orgs', {
  setup() {
    this.register('service:favorites', favorites);
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
