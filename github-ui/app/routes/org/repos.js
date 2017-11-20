import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // get id for the org
    const orgName = this.modelFor('org').id;

    return $.get(`https://api.github.com/orgs/${orgName}/repos`)
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
