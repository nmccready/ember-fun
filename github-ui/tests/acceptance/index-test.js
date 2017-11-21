import Ember from 'ember';
import Pretender from 'pretender';
import { test } from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';
import startApp from 'github-ui/tests/helpers/start-app';


let server;

function json(obj, status = 200) {
  return [status, { 'Content-Type': 'text/json' }, JSON.stringify(obj)];
}

moduleForAcceptance('Acceptance | index', {
  beforeEach: function () {
    this.application = startApp();
    server = new Pretender(function () {
      this.get('https://api.github.com/orgs/:id',
        () => json({
          id: 99,
          login: 'emberjs',
          name: 'Ember.js'
        }));

      this.get('https://api.github.com/orgs/:id/:repoid',
        () => json([{
          id: 123,
          name: 'data'
        }]));

      this.get('https://api.github.com/repos/:id/:repoid',
        () => json({
          id: 123,
          name: 'data'
        }));

      this.get('https://api.github.com/repos/:id/:repoid/issues',
        () => json([
          { id: 1, title: 'Issue 1' },
          { id: 2, title: 'Issue 2' }
        ]));

      this.get('https://api.github.com/repos/:id/:repoid/contributors',
        () => json([
          { id: 1, login: 'contributor1' },
          { id: 2, login: 'contributor2' }
        ]));
    });
  },

  afterEach: function () {
    server.shutdown();
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/orgs', '/orgs');
  });

  click('a[href*="org/emberjs"]');

  andThen(function() {
    assert.equal(currentURL(), '/org/emberjs/repos', '/org/emberjs/repos');
  });

  click('a[href*="org/emberjs/data"]');

  andThen(function() {
    assert.equal(currentURL(), '/org/emberjs/data/issues', '/org/emberjs/data/issues');
    assert.ok($('.issues li').length > 0, 'some issues');
  });

  click('a[href*="org/emberjs/data/contributors"]');

  andThen(function () {
    assert.equal(currentURL(), '/org/emberjs/data/contributors', '/org/emberjs/data/contributors');
    assert.ok($('.contributors li').length > 0, 'some contributors');
  });
});