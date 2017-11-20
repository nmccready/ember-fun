import Ember from 'ember';

export default Ember.Route.extend({
  github: Ember.inject.service(),
  model(params) {
    return this.get('github').org(params.id)
      .then((data) => {
        data.oldId = data.id;
        data.id = data.name;
        return data;
      });
  }
});