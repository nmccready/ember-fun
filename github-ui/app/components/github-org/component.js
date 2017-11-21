import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array'


export default Ember.Component.extend({
  classNames: ['github-org'],

  favorites: Ember.inject.service(),

  isFavorited: isInArray.compute('org', 'favorites.items'),

  actions: {
    favoriteWasClick() {
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
