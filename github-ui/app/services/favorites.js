import Service from '@ember/service';

export default Service.extend({
  
  items: [],

  favoriteItem(item) {
    const items = this.get('items');
    // addObject appears to handle not adding dupes
    // pushObject does not check
    items.addObject(item);
    // eslint-disable-next-line no-console
    console.log(items.map(x => x.id).join(', '));
  }
});
