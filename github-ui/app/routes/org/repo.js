import Ember from 'ember';

export default Ember.Route.extend({
  github: Ember.inject.service(),
  model({repoId}) {
    const org = this.modelFor('org');
    return this.get('github').repos({ orgId: org.login, repoId })
      .then((data) => {
        data.oldId = data.id;
        data.id = data.name;
        return data;
      });
  },
});
