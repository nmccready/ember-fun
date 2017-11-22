import { moduleFor, test } from 'ember-qunit';
import github from 'github-ui/tests/mocks/services/github'

moduleFor('adapter:repo', 'Unit | Adapter | repo', {
  setup() {
    this.register('service:github', github);
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
