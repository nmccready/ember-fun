import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:github', 'Unit | Service | github', {
  // Specify the other units that are required for this test.
  setup() {
    Object.assign(Ember.getOwner(this), {
      application: {
        API_TOKENS: {
          GITHUB: 'blah'
        }
      }
    });
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});