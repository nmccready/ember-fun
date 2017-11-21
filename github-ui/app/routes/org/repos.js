import Ember from 'ember';

export default Ember.Route.extend({
  github: Ember.inject.service(),
  model() {
    const org = this.modelFor('org');
    return this.get('github').repos({ orgId: org.login })
    //.then(() => { throw new Error('crap')});
  },

  setupController(ctrl) {
    this._super(...arguments);
    /* 
      make the model resolved in the "org" route available to
      this route's template, via "org"
    */
    ctrl.set('org', this.modelFor('org'));
  }
});