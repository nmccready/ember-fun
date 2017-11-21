import Ember from 'ember';

export default Ember.Service.extend({
  
  items: [],

  log(){
    Ember.Logger.debug(this.get('items').map(x => x.id).join(', '));
  },

  favoriteItem(item) {
    const items = this.get('items');
    // addObject appears to handle not adding dupes
    // pushObject does not check
    items.addObject(item);
    this.log();
  },
  unfavoriteItem(item) {
    const items = this.get('items');
    items.removeObject(item);
    this.log();
  }

});
