import Ember from 'ember';

export default Ember.Route.extend({
  github: Ember.inject.service(),
  model() {
    const orgId = this.modelFor('org').login;
    const repoId = this.modelFor('org.repo').name;
    return this.get('github').contributors({ orgId, repoId });
  },
});
