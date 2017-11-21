import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),

  model() {
    return [{
      id: "emberjs"
    }, {
      id: "ember-cli"
    }, {
      id: "microsoft"
    }, {
      id: "yahoo"
    }, {
      id: "netflix"
    }, {
      id: "facebook"
    }];
  },
  // model() {
  //   return new Promise((resolve, reject) =>
  //     Ember.run.later(() =>
  //       resolve([{
  //         id: "emberjs"
  //       }, {
  //         id: "ember-cli"
  //       }, {
  //         id: "microsoft"
  //       }, {
  //         id: "yahoo"
  //       }, {
  //         id: "netflix"
  //       }, {
  //         id: "facebook"
  //       }])
  //       , 1));
  // },

  actions: {
    favoriteClick(org){
      this.get('favorites').favoriteItem(org);
    },
    linkToggled(){
      console.log('TOGGLED');
    }
  }
});