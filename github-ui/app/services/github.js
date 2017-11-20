import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('token', Ember.getOwner(this).application.API_TOKENS.GITHUB);
    this.set('baseUrl', 'https://api.github.com/');
  },
  request(part) {
    const baseUrl = this.get('baseUrl');
    const url = baseUrl + part.toLowerCase() + `?access_token=${this.get('token')}`
    return $.get(url);
  },
  org(val) {
    return this.request('orgs/' + val);
  },
  repos({ orgId, repoId, doBuild}) {
    let part;
    
    if (repoId)
      part = `repos/${orgId}/${repoId}`; //repo
    else
      part = `orgs/${orgId}/repos`; //repos ..confused enough?

    // could do a builder and other patterns but this is all getting killed by ember-data
    if (doBuild)
      return part;

    return this.request(part);
  },
  contributors({ orgId, repoId }) {
    const part = this.repos({ orgId, repoId, doBuild: true }) + '/contributors';
    return this.request(part);
  },
  issues({ orgId, repoId }) {
    const part = this.repos({ orgId, repoId, doBuild: true }) + '/issues';
    return this.request(part);
  },
});