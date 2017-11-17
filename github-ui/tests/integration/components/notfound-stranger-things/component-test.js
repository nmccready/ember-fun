import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('notfound-stranger-things', 'Integration | Component | notfound stranger things', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{notfound-stranger-things}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#notfound-stranger-things}}
      template block text
    {{/notfound-stranger-things}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
