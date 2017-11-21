import Component from '@ember/component';

export default Component.extend({
  actions: {
    favoriteWasClick() {
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
