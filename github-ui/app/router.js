import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orgs', {});
  this.route('org', { path: 'org/:id' }, function() { // /orgs
    this.route('repos', {}); // /orgs/ember
    // NOTE :tags should be unique all the way down the tree
    this.route('repo', { path: ':repoId' }, function() {
      this.route('contributors', {});
      this.route('issues', {});
    }); // /org/jquery/jquery-ui
  });
  this.route('notfound', { path: '*path' });

});

export default Router;