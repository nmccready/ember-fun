import Ember from 'ember';
import { isInArray } from 'github-ui/utils/is-in-array'

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
      var favorites = this.get('favorites');
      if (!isInArray(favorites.items, org))
        return favorites.favoriteItem(org);
      
      favorites.unfavoriteItem(org);
    },
    linkToggled(){
      console.log('TOGGLED');
    }
  }
});