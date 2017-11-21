import { moduleFor, test } from 'ember-qunit';
import github from 'github-ui/services/github'

moduleFor('route:org', 'Unit | Route | org', {
  // Specify the other units that are required for this test.
  setup() {
    this.register('service:github', github);
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
