import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org}}`);

  assert.equal(this.$().text().trim(), `[
    Unfavorite
  ]`);

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      template block text
    {{/github-org}}
  `);

  assert.equal(this.$().text().trim(), `template block text



  [
    Unfavorite
  ]`);
});


test('binding updates', function (assert) {
  const org = Ember.Object.create({
    id: 'my-org',
    favorites: {
      items: []
    }
  });

  this.set('o', org);
  this.render(hbs`{{github-org org=o on-fav-clicked='favClicked'}}`);

  assert.equal(Ember.$('.github-org a').text(), 'my-org', 'original object');
  
  // Ember.run(()=>) // equivilent to $digest in angular
  org.set('id', 'other');
  this.set('o', org);
  assert.equal(Ember.$('.github-org a').text(), 'other', 'modified object');

  let actionCount = 0;
  this.on('favClicked', () => {
    // debugger;
    actionCount++;
  })

  Ember.$('.github-org span').click()
  
  assert.ok(actionCount > 0, 'actions increment');
});