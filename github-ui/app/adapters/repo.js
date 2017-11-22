import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  github: Ember.inject.service(),
  
  init() {
    this._super(...arguments);
    this.set('host', this.get('github').get('host'));
  },

  headers: {
    'Accept': '*/*' // needed as github does not like ember-data's default headers
  },

  urlForQueryRecord(query) {
    return this.get('github').buildUrl(`${query.orgId}/${query.repoId}`);
  },

  urlForQuery(query) {
    const url = this.get('github').buildUrl(`orgs/${query.orgId}/repos`);
    delete query.orgId;
    return url;
  }
});
