import { moduleFor, test } from 'ember-qunit';
import github from 'github-ui/services/github'

moduleFor('route:org/repo/contributors', 'Unit | Route | org/repo/contributors', {
  setup() {
    this.register('service:github', github);
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
