import Ember from 'ember';

export default Ember.Route.extend({
  
  authentication: Ember.inject.service(),
  
  setupController(ctrl) {
    this._super(...arguments);
    ctrl.set('records', this.get('authentication.records'));
  },

  actions: {
    addToRecords(val) {
      this.get('authentication.records').addObject({id: val});
    }
  }
});