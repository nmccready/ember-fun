import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{github-repo}}`);

  assert.equal(this.$().text().trim(), `(
  Fork Count: 0.0 ,
  Watchers Count: 0.0 
)`, 'basic');

  // Template block usage:
  this.render(hbs `
    {{#github-repo}}
      template block text
    {{/github-repo}}
  `);

  assert.equal(this.$().text().trim(), `(
  Fork Count: 0.0 ,
  Watchers Count: 0.0 
)


      template block text`, 'some to yield');
});

test('it renders repo data', function (assert) {
  this.set('repo', Ember.Object.create({
    forks_count: 1000,
    watchers_count: 1000000,
  }));

  this.render(hbs`{{github-repo repo=repo}}`);

  assert.equal(this.$().text().trim(), `(
  Fork Count: 1.0 K,
  Watchers Count: 1.0 M
)`, 'K and M');
});