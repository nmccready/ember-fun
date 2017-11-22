import { moduleFor, test } from 'ember-qunit';
import github from 'github-ui/tests/mocks/services/github'

moduleFor('route:org/repos', 'Unit | Route | org/repos', {
  setup() {
    this.register('service:github', github);
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
