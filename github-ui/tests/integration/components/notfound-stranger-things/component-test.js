import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('notfound-stranger-things', 'Integration | Component | notfound stranger things', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{notfound-stranger-things}}`);

  assert.ok(this.$().text().trim().length > 0);

});
