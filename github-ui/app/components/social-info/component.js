import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  
  attributeBindings: [
    'name',
    'twitter',
    'github'
  ].map((t) => `${t}:data-${t}`),

  actions: {
    toggleLinkSection() {
      this.set('isExpanded', !this.get('isExpanded'));
      this.sendAction('on-link-toggle');
    }
  }
});