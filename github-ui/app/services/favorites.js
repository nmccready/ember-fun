import Service from '@ember/service';

export default Service.extend({
  
  items: [],

  log(){
    // eslint-disable-next-line no-console
    console.log(this.get('items').map(x => x.id).join(', '));
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
